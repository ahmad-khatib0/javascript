// import mnt from 'moment'  // this will be automatically imported by the providePlugin in webpack config

export function showDate() {
  console.log(mnt(new Date()).format('DD-MM-YYYY'))
}

export function dummyFunction() {
  console.log('iam a dummy function ')
}
