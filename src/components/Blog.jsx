import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { blogPosts } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function BlogPostDetail({ post, onBack }) {
  return (
    <main className="relative z-10 pt-32 pb-8 max-w-4xl mx-auto px-6 md:px-8 lg:px-10">
      {/* Back button */}
      <button
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-primary hover:underline font-mono text-xs uppercase tracking-wider"
      >
        <span className="material-symbols-outlined text-[16px]">arrow_back</span>
        All Posts
      </button>

      <SectionHeader
        eyebrow={post.eyebrow}
        title={post.title.split(':')[0] + ':'}
        highlight={post.title.split(':')[1]?.trim()}
      >
        {post.description}
      </SectionHeader>

      {/* Date */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="mb-6"
      >
        <span className="font-mono text-xs text-outline uppercase tracking-widest">
          {post.date}
        </span>
      </motion.div>

      {/* Intro */}
      <motion.div
        className="glass-card p-8 md:p-10 rounded-xl mb-10"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <p
          className="text-on-surface leading-relaxed text-lg"
          dangerouslySetInnerHTML={{ __html: post.intro }}
        />
      </motion.div>

      {/* What is */}
      <motion.div
        className="glass-card p-8 md:p-10 rounded-xl mb-10"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <h2 className="font-bold text-2xl text-on-surface mb-4 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">construction</span>
          What is {post.title.split(':')[0].split(' ').slice(-1)[0]}?
        </h2>
        <p className="text-on-surface-variant leading-relaxed">{post.whatIs}</p>
      </motion.div>

      {/* Tech Stack Badges */}
      <motion.div
        className="mb-10"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <h3 className="font-mono text-xs uppercase tracking-widest text-secondary mb-4">Technology Stack</h3>
        <div className="flex flex-wrap gap-3">
          {post.techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-surface-container-high text-on-surface-variant font-mono text-xs rounded-full border border-outline-variant/30 hover:border-primary/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Core Modules */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={4}
      >
        {post.modules.map((module) => (
          <div key={module.title} className="glass-card p-6 rounded-xl hover-glow flex flex-col items-start">
            <span className="material-symbols-outlined text-primary text-3xl mb-4">{module.icon}</span>
            <h3 className="font-bold text-lg text-on-surface mb-3">{module.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">{module.text}</p>
          </div>
        ))}
      </motion.div>

      {/* Lessons */}
      <motion.div
        className="glass-card p-8 md:p-10 rounded-xl mb-10"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={5}
      >
        <h2 className="font-bold text-2xl text-on-surface mb-4 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
          Lessons Learned
        </h2>
        <p className="text-on-surface-variant leading-relaxed">{post.lessons}</p>
      </motion.div>

      {/* Tips */}
      <motion.div
        className="mb-10"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={6}
      >
        <h2 className="font-bold text-2xl text-on-surface mb-6 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">tips_and_updates</span>
          Practical Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {post.tips.map((tip) => (
            <div key={tip.title} className="glass-card p-6 rounded-xl flex gap-4">
              <span className="material-symbols-outlined text-primary text-2xl mt-1">{tip.icon}</span>
              <div>
                <h3 className="font-mono text-sm text-secondary uppercase tracking-wider mb-2">{tip.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{tip.text}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Future */}
      <motion.div
        className="glass-card p-8 md:p-10 rounded-xl"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={7}
      >
        <h2 className="font-bold text-2xl text-on-surface mb-4 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">upcoming</span>
          What’s Next?
        </h2>
        <p className="text-on-surface-variant leading-relaxed">{post.future}</p>
      </motion.div>
    </main>
  );
}

const placeholders = [
  {
    title: 'Blog in Progress',
    summary: 'A new deep‑dive article is being written. Stay tuned for fresh engineering insights.',
    icon: 'edit_note',
  },
  {
    title: 'Coming Very Soon',
    summary: 'Another project story is on its way. This space will be filled shortly.',
    icon: 'rocket_launch',
  },
];

function Blog() {
  const [selectedSlug, setSelectedSlug] = useState(null);

  if (selectedSlug) {
    const post = blogPosts.find((p) => p.slug === selectedSlug);
    if (post) {
      return <BlogPostDetail post={post} onBack={() => setSelectedSlug(null)} />;
    }
  }

  // Show all posts; only add placeholders if fewer than 3
  const needPlaceholders = Math.max(0, 3 - blogPosts.length);
  const placeholderList = placeholders.slice(0, needPlaceholders);

  return (
    <main className="relative z-10 pt-32 pb-8 max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
      <SectionHeader
        eyebrow="Engineering Journal"
        title="Project Stories &"
        highlight="Insights"
      >
        Deep dives into system architecture, tools I’m building, and lessons learned along the way.
      </SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <motion.article
            key={post.slug}
            className="glass-card hover-glow p-6 flex flex-col h-full rounded-xl cursor-pointer"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={0}
            onClick={() => setSelectedSlug(post.slug)}
          >
            <div className="flex flex-col gap-3 mb-4">
              <span className="font-mono text-[10px] text-outline uppercase tracking-widest">
                {post.date}
              </span>
              <h3 className="font-bold text-xl text-on-surface leading-snug">
                {post.title}
              </h3>
            </div>
            <p className="text-on-surface-variant text-sm flex-grow leading-relaxed">
              {post.description}
            </p>
            <button
              className="mt-6 inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider hover:underline"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedSlug(post.slug);
              }}
            >
              View More
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </motion.article>
        ))}

        {placeholderList.map((placeholder, idx) => (
          <motion.div
            key={`placeholder-${idx}`}
            className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center border border-dashed border-outline-variant/20 opacity-70"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={0}
          >
            <span className="material-symbols-outlined text-4xl text-outline mb-4">
              {placeholder.icon}
            </span>
            <h3 className="font-mono text-sm text-outline uppercase tracking-widest mb-2">
              {placeholder.title}
            </h3>
            <p className="text-on-surface-variant text-xs leading-relaxed">
              {placeholder.summary}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

export default Blog;