import { useState } from "react";
import {
  ArrowLeft,
  Search,
  Bookmark,
  BookOpen,
  Heart,
  Baby,
  Brain,
  Utensils,
  Sparkles,
  Clock,
  User,
  Star,
} from "lucide-react";
import { ArticleDetails } from "./ArticleDetails";

interface ExpertArticlesProps {
  onBack?: () => void;
}

interface Article {
  id: number;
  title: string;
  summary: string;
  author: string;
  authorTitle: string;
  readTime: string;
  category: string;
  image: string;
  week?: number | null;
}

const CATEGORY_ACCENTS: Record<string, { wash: string; accent: string; border: string }> = {
  all:         { wash: "var(--sketch-paper-tint)",     accent: "var(--sketch-ink)",        border: "var(--sketch-ink)" },
  nutrition:   { wash: "var(--sketch-sage-wash)",      accent: "var(--sketch-sage)",        border: "var(--sketch-sage)" },
  care:        { wash: "var(--sketch-rose-wash)",      accent: "var(--sketch-rose)",        border: "var(--sketch-rose)" },
  mental:      { wash: "var(--sketch-blueprint-wash)", accent: "var(--sketch-blueprint)",   border: "var(--sketch-blueprint)" },
  development: { wash: "var(--sketch-ochre-wash)",     accent: "var(--sketch-ochre)",       border: "var(--sketch-ochre)" },
  labor:       { wash: "var(--sketch-lavender-wash)",  accent: "var(--sketch-lavender)",    border: "var(--sketch-lavender)" },
  stories:     { wash: "var(--sketch-terracotta-wash)",accent: "var(--sketch-terracotta)",  border: "var(--sketch-terracotta)" },
};

export function ExpertArticles({ onBack }: ExpertArticlesProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery]           = useState("");
  const [bookmarkedArticles, setBookmarkedArticles] = useState<number[]>([1, 3]);
  const [selectedArticle, setSelectedArticle]   = useState<Article | null>(null);

  const categories = [
    { id: "all",         name: "All Articles",    icon: BookOpen  },
    { id: "nutrition",   name: "Nutrition",        icon: Utensils  },
    { id: "care",        name: "Pregnancy Care",   icon: Heart     },
    { id: "mental",      name: "Mental Wellness",  icon: Brain     },
    { id: "development", name: "Baby Development", icon: Baby      },
    { id: "labor",       name: "Labor & Delivery", icon: Sparkles  },
    { id: "stories",     name: "Moms' Stories",    icon: Heart     },
  ];

  const featuredArticle = {
    id: 0,
    title: "Top Prenatal Nutrition Tips for a Healthy Pregnancy",
    summary: "Essential vitamins, minerals, and eating habits that support your baby's development",
    author: "Dr. Sarah Johnson",
    authorTitle: "Certified Obstetrician",
    readTime: "8 min read",
    category: "nutrition",
    image: "🥗",
  };

  const articles: Article[] = [
    { id: 1, title: "Managing Morning Sickness: What Really Works",      summary: "Evidence-based strategies to ease nausea and vomiting during pregnancy",          author: "Dr. Emily Chen",      authorTitle: "Gynecologist",            readTime: "6 min read",  category: "care",        image: "🤰", week: 8  },
    { id: 2, title: "Your Second Trimester: What to Expect",              summary: "Changes in your body and baby's growth during weeks 14-27",                      author: "Dr. Michael Roberts", authorTitle: "Obstetrician",            readTime: "10 min read", category: "development", image: "👶", week: 14 },
    { id: 3, title: "Safe Exercises for Each Trimester",                  summary: "Stay active and healthy with pregnancy-safe workouts",                            author: "Lisa Martinez",       authorTitle: "Prenatal Fitness Expert", readTime: "7 min read",  category: "care",        image: "🧘", week: 12 },
    { id: 4, title: "Understanding Your Baby's Kicks and Movements",      summary: "When to expect them and what they mean for development",                          author: "Dr. Sarah Johnson",   authorTitle: "Certified Obstetrician", readTime: "5 min read",  category: "development", image: "💕", week: 18 },
    { id: 5, title: "Preparing for Labor: A Complete Guide",              summary: "Everything you need to know about labor stages and pain management",              author: "Dr. Amanda Foster",   authorTitle: "Midwife",                readTime: "12 min read", category: "labor",       image: "🏥", week: 35 },
    { id: 6, title: "My Journey: First Time Mom at 35",                   summary: "One mother's honest story about pregnancy, fears, and joy",                      author: "Jennifer Williams",   authorTitle: "Experienced Mom",        readTime: "8 min read",  category: "stories",     image: "💝", week: null },
    { id: 7, title: "Managing Stress and Anxiety During Pregnancy",       summary: "Mental health tips and relaxation techniques for expectant mothers",              author: "Dr. Lisa Anderson",   authorTitle: "Psychologist",           readTime: "9 min read",  category: "mental",      image: "🧠", week: 16 },
    { id: 8, title: "Iron-Rich Foods for Pregnancy",                      summary: "Prevent anemia with these delicious and nutritious meal ideas",                  author: "Rachel Green",        authorTitle: "Nutritionist",           readTime: "6 min read",  category: "nutrition",   image: "🍽️", week: 20 },
  ];

  const toggleBookmark = (articleId: number) => {
    setBookmarkedArticles(prev =>
      prev.includes(articleId) ? prev.filter(id => id !== articleId) : [...prev, articleId]
    );
  };

  const handleArticleClick = (article: Article) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setSelectedArticle(article), 300);
  };

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch   =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const personalizedArticles = articles.filter(
    article => article.week && article.week >= 12 && article.week <= 20
  );

  if (selectedArticle) {
    return (
      <div style={{ animation: "sketchFadeIn 0.4s ease-out" }}>
        <ArticleDetails article={selectedArticle} onBack={() => setSelectedArticle(null)} />
      </div>
    );
  }

  const activeCat = CATEGORY_ACCENTS[selectedCategory] ?? CATEGORY_ACCENTS.all;

  return (
    <div style={{ background: "var(--sketch-bg)", minHeight: "100vh" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-6xl">

        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          {onBack && (
            <button
              onClick={onBack}
              className="sketch-btn-secondary"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 18, padding: "7px 16px", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              <ArrowLeft size={15} /> Back
            </button>
          )}

          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <span className="sketch-badge sketch-badge-terracotta" style={{ fontSize: "0.72rem" }}>
              Expert Articles
            </span>
            <span className="sketch-handwriting" style={{ fontSize: "0.9rem", color: "var(--sketch-lead)" }}>
              // curated for you
            </span>
          </div>

          <h1 style={{ fontSize: "2.4rem", fontWeight: 700, margin: "0 0 6px", color: "var(--sketch-ink)", lineHeight: 1.1 }}>
            Learn &amp; Grow{" "}
            <span className="sketch-handwriting" style={{ fontSize: "1.6rem", color: "var(--sketch-terracotta)", fontWeight: 400 }}>
              // knowledge base open
            </span>
          </h1>
          <p className="sketch-note" style={{ margin: 0, fontSize: "1rem", color: "var(--sketch-graphite)" }}>
            "Evidence-based insights and lived experiences from experts and mothers alike."
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ marginBottom: 22, position: "relative" }}>
          <Search
            size={16}
            style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--sketch-lead)", pointerEvents: "none" }}
          />
          <input
            type="text"
            placeholder="Search articles, topics, or experts…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="sketch-input"
            style={{ width: "100%", paddingLeft: 40, paddingRight: 16, paddingTop: 11, paddingBottom: 11, fontSize: "0.92rem", boxSizing: "border-box" }}
          />
        </div>

        {/* Featured Article */}
        <div
          className="sketch-card sketch-crosshair"
          style={{
            background: "var(--sketch-terracotta-wash)",
            padding: 28,
            marginBottom: 24,
            display: "flex",
            gap: 24,
            alignItems: "center",
            flexWrap: "wrap",
            boxShadow: "5px 5px 0 var(--sketch-ink)",
          }}
        >
          <div className="sketch-tape-corner" style={{ top: -3, left: 18 }} />
          <div style={{ fontSize: "4.5rem", flexShrink: 0, lineHeight: 1 }}>{featuredArticle.image}</div>

          <div style={{ flex: 1, minWidth: 240 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
              <span className="sketch-badge sketch-badge-terracotta" style={{ fontSize: "0.7rem", display: "inline-flex", alignItems: "center", gap: 4 }}>
                <Star size={11} fill="currentColor" /> Featured
              </span>
              <span className="sketch-handwriting" style={{ color: "var(--sketch-lead)", fontSize: "0.82rem" }}>
                // editor's pick
              </span>
            </div>

            <h2 style={{ fontWeight: 700, fontSize: "1.45rem", color: "var(--sketch-ink)", margin: "0 0 8px", lineHeight: 1.25 }}>
              {featuredArticle.title}
            </h2>
            <p style={{ color: "var(--sketch-graphite)", margin: "0 0 14px", fontSize: "0.9rem", fontWeight: 500 }}>
              {featuredArticle.summary}
            </p>

            <div style={{ display: "flex", gap: 16, color: "var(--sketch-lead)", fontSize: "0.8rem", fontWeight: 600, marginBottom: 18, flexWrap: "wrap" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}><User size={13} />{featuredArticle.author}</span>
              <span style={{ color: "var(--sketch-graphite)" }}>{featuredArticle.authorTitle}</span>
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Clock size={13} />{featuredArticle.readTime}</span>
            </div>

            <button
              onClick={() => handleArticleClick(featuredArticle)}
              className="sketch-btn-primary"
              style={{ padding: "10px 24px", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}
            >
              Read Article →
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div style={{ marginBottom: 22 }}>
          <p style={{ fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--sketch-graphite)", marginBottom: 10 }}>
            Browse by Category
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {categories.map(cat => {
              const accent   = CATEGORY_ACCENTS[cat.id];
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    background:    isActive ? accent.accent          : "var(--sketch-paper)",
                    color:         isActive ? "var(--sketch-paper)"  : "var(--sketch-ink)",
                    border:        `1.8px solid ${isActive ? accent.accent : "var(--sketch-ink)"}`,
                    borderRadius:  "var(--radius-sketch-sm)",
                    boxShadow:     isActive ? "3px 3px 0 var(--sketch-ink)" : "2px 2px 0 var(--sketch-ink)",
                    padding:       "7px 13px",
                    fontWeight:    700,
                    fontSize:      "0.76rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    cursor:        "pointer",
                    display:       "inline-flex",
                    alignItems:    "center",
                    gap:           6,
                    transition:    "all 0.15s ease",
                    transform:     isActive ? "translate(-1px,-1px)" : "none",
                  }}
                >
                  <cat.icon size={13} />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Personalized — From Your Week */}
        {selectedCategory === "all" && personalizedArticles.length > 0 && (
          <div
            className="sketch-card-sage"
            style={{ padding: 22, marginBottom: 24, boxShadow: "4px 4px 0 var(--sketch-ink)" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <Sparkles size={17} color="var(--sketch-sage)" />
              <h3 style={{ fontWeight: 700, fontSize: "1rem", textTransform: "uppercase", margin: 0, color: "var(--sketch-ink)", letterSpacing: "0.06em" }}>
                From Your Week
              </h3>
              <span className="sketch-handwriting" style={{ fontSize: "0.85rem", color: "var(--sketch-lead)", marginLeft: 4 }}>
                // curated for week 14
              </span>
            </div>
            <p className="sketch-note" style={{ margin: "0 0 16px", fontSize: "0.85rem", color: "var(--sketch-graphite)" }}>
              Recommended for your current stage
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
              {personalizedArticles.slice(0, 4).map(article => (
                <button
                  key={article.id}
                  onClick={() => handleArticleClick(article)}
                  className="sketch-card"
                  style={{
                    background: "var(--sketch-paper)",
                    padding: "12px 14px",
                    cursor: "pointer",
                    textAlign: "left",
                    width: "100%",
                    border: "1.5px solid var(--sketch-ink)",
                    boxShadow: "2px 2px 0 var(--sketch-ink)",
                  }}
                >
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ fontSize: "2rem", flexShrink: 0, lineHeight: 1 }}>{article.image}</span>
                    <div>
                      <span className="sketch-badge sketch-badge-sage" style={{ fontSize: "0.65rem", marginBottom: 6, display: "inline-block" }}>
                        Week {article.week}
                      </span>
                      <p style={{ fontWeight: 700, fontSize: "0.82rem", margin: "0 0 2px", color: "var(--sketch-ink)", lineHeight: 1.3 }}>
                        {article.title}
                      </p>
                      <p className="sketch-handwriting" style={{ fontSize: "0.75rem", color: "var(--sketch-lead)", margin: 0 }}>
                        {article.readTime}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <div className="sketch-divider" style={{ flex: 1 }} />
            <p style={{ fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--sketch-graphite)", margin: 0, whiteSpace: "nowrap" }}>
              {selectedCategory === "all" ? "All Articles" : categories.find(c => c.id === selectedCategory)?.name}
            </p>
            <div className="sketch-divider" style={{ flex: 1 }} />
          </div>

          {filteredArticles.length === 0 ? (
            <div className="sketch-card" style={{ padding: 48, textAlign: "center", borderStyle: "dashed", color: "var(--sketch-lead)" }}>
              <BookOpen size={38} style={{ margin: "0 auto 12px", opacity: 0.4 }} />
              <p className="sketch-handwriting" style={{ margin: 0, fontSize: "1rem" }}>No articles found…</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
              {filteredArticles.map(article => {
                const accent      = CATEGORY_ACCENTS[article.category] ?? CATEGORY_ACCENTS.all;
                const isBookmarked = bookmarkedArticles.includes(article.id);
                return (
                  <div
                    key={article.id}
                    className="sketch-card"
                    style={{ background: accent.wash, padding: 20, cursor: "pointer", display: "flex", flexDirection: "column" }}
                    onClick={() => handleArticleClick(article)}
                  >
                    {/* Top row */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                      <span style={{ fontSize: "2.6rem", lineHeight: 1 }}>{article.image}</span>
                      <button
                        onClick={e => { e.stopPropagation(); toggleBookmark(article.id); }}
                        style={{
                          background:   isBookmarked ? "var(--sketch-rose-wash)" : "var(--sketch-paper)",
                          border:       `1.5px solid ${isBookmarked ? "var(--sketch-rose)" : "var(--sketch-ink)"}`,
                          borderRadius: "var(--radius-sketch-sm)",
                          boxShadow:    "2px 2px 0 var(--sketch-ink)",
                          padding:      "4px 8px",
                          cursor:       "pointer",
                          color:        isBookmarked ? "var(--sketch-rose)" : "var(--sketch-ink)",
                          display:      "flex",
                          alignItems:   "center",
                        }}
                      >
                        <Bookmark size={15} fill={isBookmarked ? "currentColor" : "none"} />
                      </button>
                    </div>

                    {/* Category badge */}
                    <span
                      className="sketch-badge"
                      style={{
                        background:   accent.wash,
                        color:        accent.accent,
                        border:       `1.5px solid ${accent.border}`,
                        fontSize:     "0.65rem",
                        marginBottom: 10,
                        alignSelf:    "flex-start",
                        textTransform:"uppercase",
                        letterSpacing:"0.06em",
                      }}
                    >
                      {categories.find(c => c.id === article.category)?.name ?? article.category}
                    </span>

                    <h4 style={{ fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px", color: "var(--sketch-ink)", lineHeight: 1.35 }}>
                      {article.title}
                    </h4>
                    <p style={{ fontWeight: 500, fontSize: "0.82rem", color: "var(--sketch-graphite)", margin: "0 0 14px", lineHeight: 1.5, flex: 1 }}>
                      {article.summary}
                    </p>

                    <div style={{ display: "flex", gap: 14, fontSize: "0.75rem", fontWeight: 600, color: "var(--sketch-lead)", marginBottom: 14, flexWrap: "wrap" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}><User size={12} />{article.author}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Clock size={12} />{article.readTime}</span>
                    </div>

                    <button
                      className="sketch-btn-dark"
                      style={{ width: "100%", padding: "9px 14px", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}
                      onClick={e => { e.stopPropagation(); handleArticleClick(article); }}
                    >
                      Read More →
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div style={{ height: 52 }} />
      </div>
    </div>
  );
}
