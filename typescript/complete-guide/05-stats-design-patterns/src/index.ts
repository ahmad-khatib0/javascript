import { MatchReader } from './MatchReader'
import { Summary } from './Summary'

// const csvFileReader = new CsvFileReader('football.csv')
// const matchReader = new MatchReader(csvFileReader)
// matchReader.load()
const matchReader = MatchReader.fromCsv('football.csv')
const summary = Summary.winsAnalysisWithHtmlReport('Man United')

matchReader.load()
summary.buildAndPrintReport(matchReader.matches)
