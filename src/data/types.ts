export type Markdown = string
export type Date = string
export type Url = string
export type Icon = string
export type Color = string

export interface LocalizedString {
  [lang: string]: string
}

export interface LocalizedMarkdown {
  [lang: string]: Markdown
}

export interface KeyObject {
  key: string
}
