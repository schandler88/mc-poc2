// This is the default value of --as--color--primary
const DEFAULT_BAR_COLOR_HEX = '#47DB99';
// This is the default value of --as--color--complementary
const DEFAULT_BACKGROUND_BAR_COLOR_HEX = '#E2E6E3';
const DEFAULT_BAR_COLOR = `var(--as--color--complementary, ${DEFAULT_BAR_COLOR_HEX})`;
const DEFAULT_BACKGROUND_BAR_COLOR = `var(--as-color--type-03, ${DEFAULT_BACKGROUND_BAR_COLOR_HEX})`;
const DEFAULT_NUMBER_FORMAT = '%Q';
const DEFAULT_DATE_FORMAT = '%x';
const AUTO_FORMAT = 'auto';

export { AUTO_FORMAT as A, DEFAULT_BAR_COLOR as D, DEFAULT_BACKGROUND_BAR_COLOR as a, DEFAULT_NUMBER_FORMAT as b, DEFAULT_DATE_FORMAT as c, DEFAULT_BAR_COLOR_HEX as d, DEFAULT_BACKGROUND_BAR_COLOR_HEX as e };
