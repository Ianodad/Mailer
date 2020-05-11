def dockerImage;
def commit_id;
node('mailer') {
	stage('SCM'){
	checkout scm
	 sh "git rev-parse --short HEAD > .git/commit-id"
	 commit_id = readFile('.git/commit-id').trim()
	}
	stage ('test') {
	  def myTestContainer = docker.image('node:12.3')
	    myTestContainer.pull()
            myTestContainer.inside("-u root") {
	    sh 'npm install --only=dev'
            sh 'npm test'
		}
	}
	stage('build'){
		dockerImage = docker.build('ianodad/mailer:${commit_id}', ".")
	}
	stage('push'){
	  docker.withRegistry("https://index.docker.io/v1", 'dockerhubcreds') {
	    dockerImage.push();
		}
	}
}
