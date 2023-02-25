import { arraySidebar } from "vuepress-theme-hope";

export const code = arraySidebar([
    "",
    {
        text: "Go",
        icon: "vscode",
        prefix: "go/",
        collapsible: true,
        children: [
            "",

        ],
    },
    {
        text: "博客部署",
        icon: "blog",
        prefix: "vuepress/",
        collapsible: true,
        children: [
            "",
            "1",
            "2"
        ],
    },
]);