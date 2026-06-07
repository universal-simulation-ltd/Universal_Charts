// Sample datasets — pre-loaded so a first-time visitor sees a chart instantly
// and can explore the controls before pasting their own data.

export interface Sample {
  id: string
  label: string
  csv: string
}

export const SAMPLES: Sample[] = [
  {
    id: 'sales',
    label: 'Quarterly sales',
    csv: `Quarter,North,South,Online
Q1,120,90,60
Q2,150,110,95
Q3,170,130,140
Q4,210,160,190`,
  },
  {
    id: 'temperature',
    label: 'Monthly temperature',
    csv: `Month,High,Low
Jan,8,2
Feb,9,2
Mar,12,4
Apr,15,6
May,18,9
Jun,21,12`,
  },
  {
    id: 'population',
    label: 'City population (m)',
    csv: `City,Population
London,8.9
Birmingham,2.6
Manchester,2.7
Leeds,1.9
Glasgow,1.7`,
  },
]

export const DEFAULT_SAMPLE = SAMPLES[0]
