// @flow
import firebase from 'firebase'

function getFirebaseCredentials () {
  if (!process.env.REACT_APP_PROJECT_ID) {
    throw new Error('REACT_APP_PROJECT_ID undefined')
  }
  if (!process.env.REACT_APP_API_KEY) {
    throw new Error('REACT_APP_API_KEY undefined')
  }
  return [process.env.REACT_APP_PROJECT_ID, process.env.REACT_APP_API_KEY]
}

function getExistingFbApp (projectId) {
  return firebase.apps.find(app => app.name === projectId)
}

function initNewFbApp (projectId, apiKey) {
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
