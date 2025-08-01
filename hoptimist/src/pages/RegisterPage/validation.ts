import type { Rule } from 'antd/es/form'

export const firstNameValidationRules: Rule[] = [
  { required: true, message: 'Please input your first name', whitespace: true },
  { min: 2, message: 'First name must be at least 2 characters long', whitespace: true },
]

export const lastNameValidationRules: Rule[] = [
  { required: true, message: 'Please input your last name', whitespace: true },
  { min: 2, message: 'Last name must be at least 2 characters long', whitespace: true },
]