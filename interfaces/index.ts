export type Anchor = {
  href: string
  text: string
}

export type WorkExperience = {
  readonly employer: string
  readonly timeFrame: string
  readonly technologies: ReadonlyArray<string>
  readonly accomplishments: ReadonlyArray<string>
}
