import type { Config } from 'tailwindcss';
export default { content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'], theme:{extend:{colors:{ink:'#10243A',ocean:'#087C86',mint:'#D9F0ED',sand:'#F7F5F0'},boxShadow:{soft:'0 12px 35px rgba(16,36,58,.08)'} }}, plugins:[] } satisfies Config;
