// @flow
import firebase from 'firebase'

function getFirebaseCredentials (): [string, string] {
  if (!process.env.REACT_APP_PROJECT_ID) {
    throw new Error('REACT_APP_FB_PROJECT_ID undefined')
  }
  if (!process.env.REACT_APP_API_KEY) {
    throw new Error('REACT_APP_FB_API_KEY undefined')
  }
  return [
    String(process.env.REACT_APP_FB_PROJECT_ID),
    String(process.env.REACT_APP_FB_API_KEY)
  ]
}

function getExistingFbApp (projectId) {
  return firebase.apps.find(app => app.name === projectId)
}

function initNewFbApp (projectId: string, apiKey: string) {
  const config = {
    apiKey: apiKey,
    authDomain: `${projectId}.firebaseapp.com`,
    projectId: projectId,
    storageBucket: `${projectId}.appspot.com`
  }
  return firebase.initializeApp(config, projectId)
}

function getFbApp () {
  const [projectId, apiKey] = getFirebaseCredentials()
  return getExistingFbApp(projectId) || initNewFbApp(projectId, apiKey)
}

const fbApp = getFbApp()

export default fbApp
