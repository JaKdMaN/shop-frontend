//Controls
export type InputType = 'email' | 'number' | 'password' | 'text' | 'textarea'

export type InputValueType = string | number | null | undefined

export type BaseInputValueUpdateType = string | number | null

export type CheckboxInputValueType = boolean | string[] | null | undefined

//other
export interface ILink {
  name: string,
  path: string,
}
