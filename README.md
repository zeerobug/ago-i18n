# ago-i18n

Fully unit tested module to convert Date objects into human readable relative timestamps, such as `'4 minutes ago'`, `'yesterday'`, `'tomorrow'`, or `'in 3 months'`.

This fork adds i18n capabilities and a spanish version.
It is easily translatable, refer to [i18n documentation](https://github.com/mashpie/i18n-node)

## Usage

```javascript
var ago = require("ago-i18n");

// Set locale "en" or "es" (en by default)
ago.locale = "en";

var now = new Date();
var yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
var hoursAgo = new Date(now.getTime() - 6 * 60 * 60 * 1000);
var yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
var tomorrow = new Date(now.getTime() + 6 * 60 * 60 * 1000);
var inSixHours = new Date(now.getTime() + 6 * 60 * 60 * 1000);

// present
ago(now); // 'just now'

// past
ago(yesterday); // 'yesterday'
ago(hoursAgo); // '6 hours ago'

// future
ago(inSixHours); // 'in 6 hours'
ago(tomorrow); // 'tomorrow'
```

Output is as follows:

| Time                 | Output          | Future output  |
| -------------------- | --------------- | -------------- |
| Less than 1 minute   | `just now`      | `just now`     |
| 1-2 minutes          | `a minute ago`  | `in a minute`  |
| 2-46 minutes         | `# minutes ago` | `in # minutes` |
| 46 minutes - 2 hours | `an hour ago`   | `in an hour`   |
| 2-20 hours           | `# hours ago`   | `in # hours`   |
| 20-48 hours          | `yesterday`     | `tomorrow`     |
| 2-6 days             | `last week`     | `in a week`    |
| 7-28 days            | `# weeks ago`   | `in # weeks`   |
| 28 days - 2 months   | `last month`    | `in a month`   |
| 2-11 months          | `# months ago`  | `in # months`  |
| 11-23 months         | `last year`     | `in a year`    |
| 2+ years             | `# years ago`   | `in # years`   |
