// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//isPhoneNumber
test('valid number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number 2', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number, short', () => {
  expect(isPhoneNumber('123-45')).toBe(false);
});

test('invalid phone number, letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

//isEmail

test('valid email', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('valid email 2', () => {
  expect(isEmail('test2@example.com')).toBe(true);
});

test('invalid email 1, no @', () => {
  expect(isEmail('test.com')).toBe(false);
});

test('invalid email 2', () => {
  expect(isEmail('test@example.comm')).toBe(false);
});

//isStringPassword

test('valid password, starts with letter', () => {
  expect(isStrongPassword('a1234')).toBe(true);
});

test('valid password, correct length', () => {
  expect(isStrongPassword('A_12345678901')).toBe(true);
});

test('invalid password, starts with number', () => {
  expect(isStrongPassword('1abcdefg')).toBe(false);
});

test('invalid password, too short', () => {
  expect(isStrongPassword('a1')).toBe(false);
});

//isDate

test('valid date 1', () => {
  expect(isDate('1/1/2025')).toBe(true);
});

test('valid date 2', () => {
  expect(isDate('12/31/2025')).toBe(true);
});

test('invalid date 1', () => {
  expect(isDate('2020/01/01')).toBe(false);
});

test('invalid date 2', () => {
  expect(isDate('12/25')).toBe(false);
});

//isHexColor

test('valid 3-char hex', () => {
  expect(isHexColor('#abc')).toBe(true);
});

test('valid 6-char hex', () => {
  expect(isHexColor('abcdef')).toBe(true);
});

test('invalid hex, wrong length', () => {
  expect(isHexColor('#abcd')).toBe(false);
});

test('invalid hex, invalid chars', () => {
  expect(isHexColor('#zzzzzz')).toBe(false);
});