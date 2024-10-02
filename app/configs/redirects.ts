import { configSite } from "~/configs/site"
import { type ConfigRedirect } from "~/utils/redirect-route.server"

export const configRedirects: ConfigRedirect[] = [
  { path: "/auth", to: "/login" },
  { path: "/github", url: configSite.links.github },
  { path: "/links", to: "/redirects" },
  { path: "/settings", to: "/user/settings" },
  { path: "/signin", to: "/login" },
  { path: "/signout", to: "/logout" },
  { path: "/signup", to: "/register" },
  { path: "/twitter", url: configSite.links.twitter },
  { path: "/telegram", url: configSite.links.telegramGroup },
  { path: "/x", to: "/twitter" },
  { path: "/youtube", url: configSite.links.youtube },

  {
    path: "/bootcamp",
    url: "https://bearmentor.notion.site/Bootcamp-Online-Full-Stack-Web-di-Bearmentor-0917dd62867b4629934db57ff58daebb",
  },
  {
    path: "/programs",
    url: "https://bearmentor.notion.site/Bearmentor-with-Haidar-735d1483405b40cba6e110cf1f861769",
  },
  {
    path: "/telegram",
    url: "https://t.me/bearmentor",
  },
  {
    path: "/syllabus",
    url: "https://bearmentor.notion.site/9c9087723a1d4f3fae35eda01e3499ce",
  },
  {
    path: "/schedules",
    url: "https://airtable.com/app0KqazHuNw11dLe/shryKvP0pXX37ngHm",
  },
  {
    path: "/timeline",
    url: "https://airtable.com/app0KqazHuNw11dLe/shrxdjlKGkNjfwXA3",
  },
  {
    path: "/members",
    url: "https://airtable.com/appy4zcfskMzSC5wl/shrAaXOs85G3y0GWR",
  },
  {
    path: "/projects",
    url: "https://airtable.com/appy4zcfskMzSC5wl/shr1xh0LXSjWqZUGm",
  },
  {
    path: "/mentorship",
    url: "https://bearmentor.notion.site/Mentorship-dengan-Haidar-30c5ee047d5f40ffb36cca6650ad9d15",
  },
  {
    path: "/request",
    url: "https://a.bearmentor.com/request",
  },
  {
    path: "/onsite",
    url: "https://bearmentor.notion.site/Bootcamp-Onsite-Full-Stack-Web-di-Bearmentor-7504b32517124e5eb0c47be2250d8573",
  },
  {
    path: "/onsite-register",
    url: "https://airtable.com/appC9J8JxF40niUx1/shrk8RsgG3Qb4fPkg",
  },
  {
    path: "/register",
    url: "https://airtable.com/appoep7dnVYMxASul/shrh3DfTIltyeWx4y",
  },
  {
    path: "/wait",
    url: "https://airtable.com/appoep7dnVYMxASul/shrcSpIhWa1EgtSfV",
  },
  {
    path: "/payment",
    url: "https://airtable.com/appoep7dnVYMxASul/shr9IOu7OF4eGRKW8",
  },
  {
    path: "/handbook",
    url: "https://bearmentor.notion.site/Bearmentor-Bootcamp-Handbook-Indonesian-4cc3a2d64b4c40c89abe2c26a4c1b3c8",
  },
  {
    path: "/profile",
    url: "https://airtable.com/appy4zcfskMzSC5wl/shrPE08KkNU9rw2Lq",
  },
  {
    path: "/submit",
    url: "https://airtable.com/appy4zcfskMzSC5wl/shrq8dIBtkonS183s",
  },
  {
    path: "/feedback",
    url: "https://airtable.com/appy4zcfskMzSC5wl/shroUmtS2THxI1S2n",
  },
  {
    path: "/hiring",
    url: "https://bearmentor.notion.site/a3145866da3240e4950d66dbef4df70e",
  },
  {
    path: "/hiring-apply",
    url: "https://airtable.com/app0KqazHuNw11dLe/shrvWP9voob1v82MJ",
  },
  {
    path: "/hiring-test",
    url: "https://airtable.com/app0KqazHuNw11dLe/shrduSWQGQo803XLy",
  },
  {
    path: "/hiring-payout",
    url: "https://airtable.com/app0KqazHuNw11dLe/shrmbmU4O0WVZXhz7",
  },
  {
    path: "/mentors",
    url: "https://airtable.com/app0KqazHuNw11dLe/shrYykMtz3MJVrgDy/tblkz7hAqQMDZAQQW",
  },
  {
    path: "/mentor-onboarding",
    url: "https://bearmentor.notion.site/Mentor-Onboarding-30acd48c04bd40dab4c287a57f964576",
  },
  {
    path: "/mentor-resources",
    url: "https://bearmentor.notion.site/Mentor-Resources-af6af2e5aba94a28a0b1e255d3b6faab",
  },
  {
    path: "/mentor-payout",
    url: "https://airtable.com/app0KqazHuNw11dLe/shruAuruQfvvvhmn5",
  },
  {
    path: "/affiliate",
    url: "https://bearmentor.notion.site/Bearmentor-Affiliate-Program-9c0894509ca94222a51263cd4042c248",
  },
  {
    path: "/affiliator",
    url: "https://airtable.com/appoep7dnVYMxASul/shrVfOETQwL7yrGh0",
  },
  {
    path: "/example",
    url: "https://example.com",
  },
]
