import type { Article } from './types'

const articles: Article[] = [
  {
    id: 'choosing-a-chart',
    title: 'Choosing the right chart',
    summary: 'Which of the nine chart types suits your data, and why.',
    group: 'The basics',
    body: `A good chart answers one question at a glance. The right type depends on what you want the reader to notice.

## Comparing amounts

- **Bar** is the safest choice for comparing amounts across categories: sales by region, votes by option. People judge the lengths of bars very accurately.
- **Horizontal bar** does the same job, and works better when the category names are long or there are many of them, because the labels have room to be read.
- **Stacked bar** shows how each total is made up, such as sales per quarter split by region. The totals are easy to compare; the individual pieces above the bottom one are harder.

## Showing change over time

- **Line** is the natural choice for anything measured in sequence, such as months or years. Several lines on one chart let you compare trends.
- **Area** is a line with the space beneath it filled in. It emphasises volume, but overlapping areas can hide one another, so keep to a few series.

## Showing parts of a whole

- **Pie** and **Donut** show how one total is divided. They work best with a handful of slices that add up to something meaningful, such as 100 per cent of a budget. With many similar slices, a bar chart is easier to read. They use one value series only, and values below zero can’t be shown as slices.

## Other shapes

- **Scatter** plots one number against another, to show whether they move together, such as height against weight. Both axes must be numbers.
- **Radar** compares several items across the same set of measures, arranged in a circle. It suits a few items and a few measures; beyond that it becomes hard to read.

## A few general tips

- Give the chart a title that says what it shows.
- Keep colours to a minimum, and use the legend only when there is more than one series.
- Data labels help when exact values matter; gridlines help when the reader will estimate values by eye.`,
  },
  {
    id: 'what-is-csv',
    title: 'What CSV actually is',
    summary: 'The simple text format behind most data you can chart.',
    group: 'The basics',
    body: `CSV stands for comma-separated values. It is one of the oldest and simplest ways of storing a table: plain text, one row per line, with a comma between each value.

## An example

A small table of sales might look like this as CSV:

Month,Sales

Jan,120

Feb,150

In a real file each row sits on its own line, with no blank lines between them. The first line is the **header**: it names each column. Every line after it is one row of data, with its values in the same order as the header.

## Why it is everywhere

Because CSV is just text, almost every program can read and write it: spreadsheets, databases, accounting software, survey tools and many websites offering a download. It has no fonts, colours, formulas or multiple sheets — only the values — which is exactly what makes it so easy to move between programs.

## Some variations you will meet

- **Other separators.** Some programs use a semicolon, a tab or a vertical bar instead of a comma. A semicolon is common in countries where the comma is the decimal mark.
- **Quotes.** A value that itself contains a comma, such as a name like Smith, John, is wrapped in double quotes so that the comma isn’t mistaken for a separator.
- **Tab-separated text.** When you copy a block of cells from a spreadsheet, it usually lands on the clipboard as text with a tab between each value. That is close enough to CSV that Universal Charts reads it too.

## Getting CSV out of a spreadsheet

Most spreadsheet programs can save or download a sheet as CSV, often under Save as or Download. It is usually quicker, though, to select the cells you want, including the header row, copy them, and paste them straight into Universal Charts.`,
  },
  {
    id: 'data-problems',
    title: 'When your data doesn’t look right',
    summary: 'Separators, decimal commas, dates and columns that won’t plot.',
    group: 'How it works',
    body: `Universal Charts reads the first row as the column names and works out for itself which columns hold numbers. When a chart looks wrong, the cause is almost always one of the following.

## A column won’t appear as a value

A column counts as numbers only if **every** filled-in cell in it is a number. A single entry such as n/a, TBC or a dash turns the whole column into text, and text columns can be used only as labels. Clear or correct the odd entry, then press **Update chart**. Empty cells are fine.

Currency signs (£, $ and €), percent signs, spaces and commas are ignored when reading numbers, so £1,200 and 45% are read as 1200 and 45.

## Decimals written with a comma

Because commas inside numbers are treated as thousands separators, a decimal comma is misread: 3,5 becomes 35. If your data uses commas for decimals, change them to full stops before pasting, and remove any full stops used to separate thousands.

## Everything lands in one column

The app works out the separator by itself: commas, semicolons, tabs and vertical bars are all recognised. If everything still arrives in one column, check that every row uses the same separator, and that the first row is really the header.

## A value is split in two

In comma-separated data, a value containing a comma must be wrapped in double quotes, or it will be read as two values and push everything after it along by one column.

## Dates

Dates are read as labels, not as a timeline. They appear in exactly the order they have in your data, so sort the rows by date before pasting, and write every date the same way. Gaps are not filled in: if a month is missing from your data, it is missing from the chart.

## Columns with no name

If a header cell is empty, the column is called Column 1, Column 2 and so on, by its position.

## The chart doesn’t change

After editing the data, press **Update chart**. The chart is only redrawn from the text when you ask.`,
  },
  {
    id: 'how-it-works',
    title: 'How Universal Charts works',
    summary: 'From pasted data to a finished image, all inside your browser.',
    group: 'How it works',
    body: `Universal Charts turns a table of numbers into a chart without your data ever being uploaded. Everything happens inside your browser, on your own device.

## Making a chart

1. Paste your data into the Data box, with the column names in the first row, and press **Update chart**. To try things out first, pick one of the sample datasets.
2. The app suggests a starting point: the first column containing text becomes the categories along the X axis, and every column of numbers becomes a series.
3. Choose a chart type, and change which columns are used if you need to. For a scatter chart, choose a column of numbers for the X axis.
4. Add a title, pick colours, and turn gridlines, the legend, data labels and smooth curves on or off.

## Exporting

- **PNG** saves a picture of the chart. Choose 1×, 2× or 3×: the higher the number, the sharper the image and the larger the file. 2× suits most documents and slides.
- **SVG** saves the chart as a vector drawing, which stays sharp at any size and can be edited in design software.
- **Copy** puts a PNG of the chart on your clipboard, ready to paste into a document or message. Some browsers don’t allow this; if so, the app says so and you can download a PNG instead.

Exports always have a white background, even when the app is in dark mode, so the same chart looks the same wherever it ends up.

## Things to know

- **Your work isn’t saved.** The app keeps no copy of your data or chart. If you reload the page, it starts again from the sample data. Keep your original data, or make a share link, if you may want to come back to a chart.
- **It works offline.** Once the app has loaded, it can make charts without an internet connection, because nothing needs a server.
- **Signed in with a Universal ID?** If your organisation has set a brand colour, it leads the colour palette automatically, darkened slightly if needed so that it stands out clearly against the white background.`,
  },
  {
    id: 'privacy-and-sharing',
    title: 'Your data, and share links',
    summary: 'What stays on your device, and what a share link contains.',
    group: 'Privacy and security',
    body: `Universal Charts has no server of its own to send your data to. Reading your data, drawing the chart and producing the export all happen in your browser, on your device.

## What stays on your device

- The data you paste is read in your browser and is never uploaded.
- The chart is drawn in your browser.
- PNG and SVG files are created in your browser and saved straight to your device.
- The app doesn’t keep your data after you leave: it isn’t stored on the device or anywhere else.

## How a share link works

**Share link** copies a web address that contains the whole chart — its settings **and all of its data** — compressed into the link itself. The app doesn’t store charts anywhere: when someone opens the link, their browser rebuilds the chart from the link alone.

The chart is carried in the part of the link after the # sign. Browsers never send that part to a website, so opening a share link doesn’t pass the data to our server either.

That has two consequences worth understanding:

- **The link is the data.** Anyone who has the link can see every value in the chart, so share it only with people who may see the data. Links also tend to be kept — in browser history, in chat and email, and wherever they are forwarded — so treat the link as you would the data itself.
- **Large tables make long links.** The link grows with the amount of data. Very long links can be cut short by some apps and websites, so share links suit small and medium-sized tables best. For a large table, share an exported image instead.

## Universal ID

Signing in is optional, and the app works fully without it. If you are signed in with a Universal ID, the app reads your organisation’s brand colour so it can use it in your charts. Your data isn’t part of that request, and the app never writes anything to your account.`,
  },
]

export default articles
