node {
	def commit_id
	stage('Preparation'){
	 checkout scm
	 sh "git rev-parse --short HEAD > .git/commit-id"
	 commit_id = readFile('.git/commit-id').trim()		
	}
	stage('test'){
	 nodejs(nodeJSInstallationName: 'nodejs') {
	  sh 'npm install --only=dev'
	  sh 'npm test'		
		}	
	}
	stage('push'){
	 docker.withRegistry('https://index.docker.io/v1', 'dockerhub'){
	  def app = docker.build("ianodad/mailer:${commit_id}", ".").push()
		}	
	}
	stage('build'){
		sh 'docker run -d -p 80:8000 mailer:${commit_id}'
	}
}
