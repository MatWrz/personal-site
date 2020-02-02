export type Anchor = {
  href: string
  text: string
}

export type CVHeaderInfo = {
  readonly fullName: string
  readonly email: string
  readonly website: string
  readonly address: string
  readonly city: string
  readonly province: string
  readonly country: string
  readonly phoneNumber: string
}

export type KeySkill = {
  readonly title: string
  readonly competencyLevel: string
  readonly years: string
  readonly description: string
}

export type WorkExperience = {
  readonly employer: string
  readonly timeFrame: string
  readonly technologies: ReadonlyArray<string>
  readonly accomplishments: ReadonlyArray<string>
}
