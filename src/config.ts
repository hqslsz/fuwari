import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "QusMarsh",
	subtitle: "Main Page",
	lang: "zh_CN", // 语言代码，例如 'en', 'zh_CN', 'ja' 等
	themeColor: {
		hue: 105, // 主题色的默认色相，范围 0 到 360。例如红色: 0，青色: 200，蓝色: 250，粉色: 345
		fixed: true, // 隐藏访客的主题色选择器
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // 相对于 /src 目录的路径。如果以 '/' 开头则相对于 /public 目录
		position: "center", // 等同于 object-position，仅支持 'top', 'center', 'bottom'。默认为 'center'
		credit: {
			enable: false, // 显示横幅图片的版权信息文本
			text: "", // 要显示的版权信息文本
			url: "", // （可选）指向原始作品或艺术家页面的链接
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 3, // 目录显示的最大标题层级，范围 1 到 3
	},
	favicon: [
		// 留空数组以使用默认 favicon
		{
			src: "/favicon/kdla.jpg", // favicon 路径，相对于 /public 目录
			theme: "light", // （可选）'light' 或 'dark'，仅在有不同主题的 favicon 时设置
			sizes: "32x32", // （可选）favicon 尺寸，仅在有不同尺寸的 favicon 时设置
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/saicaca/fuwari", // 内部链接不需要包含基础路径，会自动添加
			external: true, // 显示外链图标并在新标签页打开
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/kdl.jpg", // 相对于 /src 目录的路径。如果以 '/' 开头则相对于 /public 目录
	name: "Quasi2317",
	bio: "喜欢折腾新事物的小同学(雾)",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:bilibili", // 图标代码可访问 https://icones.js.org/
			// 如未包含对应图标集需安装：
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://space.bilibili.com/347716167",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://steamcommunity.com/id/HQS_LSZ/",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/hqslsz",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：部分样式（如背景色）已被覆盖，详见 astro.config.mjs 文件。
	// 请选择深色主题，因为本博客主题目前仅支持深色背景
	theme: "github-dark",
};
