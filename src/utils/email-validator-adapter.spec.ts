import { EmailValidatorAdapter } from './email-validator'

describe('Email Validator', () => {
  test('should return false if validator return false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')

    expect(isValid).toBe(false)
  })
})
