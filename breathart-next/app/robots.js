// Search engines and AI assistants (ChatGPT, Perplexity, Claude, Gemini, Copilot)
// are explicitly allowed so BreathART can appear in AI answers.
const AI_AND_SEARCH_BOTS = [
  'Googlebot',
  'Bingbot',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
  'DuckAssistBot',
  'Meta-ExternalAgent',
];

export default function robots() {
  return {
    rules: [
      { userAgent: AI_AND_SEARCH_BOTS, allow: '/', disallow: ['/admin', '/admin/', '/thank-you'] },
      { userAgent: '*', allow: '/', disallow: ['/admin', '/admin/'] },
    ],
    sitemap: 'https://www.breathartstudio.com/sitemap.xml',
    host: 'https://www.breathartstudio.com',
  };
}
