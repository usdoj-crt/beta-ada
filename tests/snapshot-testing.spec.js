// example.spec.js
const { test, expect } = require('@playwright/test');

const HOME = 'http://localhost:4000/';
const TOPICS = 'topics/';
const LAWS = 'law-and-regs/';
const COMPLAINT = 'file-a-complaint/';
const COMPLAINTES = 'es/presente-una-queja/'
const CASES = 'cases/';
const FEEDBACK = 'feedback/';
const INTRO = 'topics/intro-to-ada/';
const SERVICE = 'topics/service-animals/';
const PARKING = 'topics/parking/';
const MOBILITY =  'topics/mobility-devices/';
const COMMUNICATION = 'topics/effective-communication/';
const INFOLINE = 'infoline/';
const COVID = 'notices/2021/08/25/covid-qa/';
const WEB = 'web-guidance/';
const AI = 'ai-guidance/';
const RESOURCES = 'resources/';

test('Match screenshots of each page', async ({ page }) => {
  await page.goto(HOME);
  expect(await page.screenshot()).toMatchSnapshot();

  await page.goto(`${HOME}${TOPICS}`);
  expect(await page.screenshot()).toMatchSnapshot();

  await page.goto(`${HOME}${INTRO}`);
  expect(await page.screenshot()).toMatchSnapshot();

  await page.goto(`${HOME}${SERVICE}`);
  expect(await page.screenshot()).toMatchSnapshot();

  await page.goto(`${HOME}${PARKING}`);
  expect(await page.screenshot()).toMatchSnapshot();

  await page.goto(`${HOME}${MOBILITY}`);
  expect(await page.screenshot()).toMatchSnapshot();

  await page.goto(`${HOME}${COMMUNICATION}`);
  expect(await page.screenshot()).toMatchSnapshot();

  await page.goto(`${HOME}${LAWS}`);
  expect(await page.screenshot()).toMatchSnapshot();

  await page.goto(`${HOME}${COMPLAINT}`);
  expect(await page.screenshot()).toMatchSnapshot();

  await page.goto(`${HOME}${COMPLAINTES}`);
  expect(await page.screenshot()).toMatchSnapshot();

  await page.goto(`${HOME}${CASES}`);
  expect(await page.screenshot()).toMatchSnapshot();

  await page.goto(`${HOME}${FEEDBACK}`);
  expect(await page.screenshot()).toMatchSnapshot();

  await page.goto(`${HOME}${INFOLINE}`);
  expect(await page.screenshot()).toMatchSnapshot();

  await page.goto(`${HOME}${COVID}`);
  expect(await page.screenshot()).toMatchSnapshot();

  await page.goto(`${HOME}${WEB}`);
  expect(await page.screenshot()).toMatchSnapshot();

  await page.goto(`${HOME}${AI}`);
  expect(await page.screenshot()).toMatchSnapshot();

  await page.goto(`${HOME}${RESOURCES}`);
  expect(await page.screenshot()).toMatchSnapshot();
});