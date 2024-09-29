import promotheusIcon from "../assets/icons/promotheus.svg";
import lokiIcon from "../assets/icons/loki.svg";
import bitbucketIcon from "../assets/icons/bitbucket.svg";
import gitlabIcon from "../assets/icons/gitlab.svg";
import kotlinIcon from "../assets/icons/kotlin.svg";
import androidIcon from "../assets/icons/android-icon.svg";
import javaIcon from "../assets/icons/java.svg";
import azureIcon from "../assets/icons/azure.svg";
import gcpIcon from "../assets/icons/gcp.svg";
import digitalIcon from "../assets/icons/digital.svg";
import awsIcon from "../assets/icons/aws.svg";
import kubernetesIcon from "../assets/icons/kubernetes.svg";
import elkIcon from "../assets/icons/elk.svg";
import grafanaIcon from "../assets/icons/grafana.svg";
import terraformIcon from "../assets/icons/terraform.svg";
import iosIcon from "../assets/icons/ios.svg";
import swiftIcon from "../assets/icons/swift.svg";
import flutterIcon from "../assets/icons/flutter.svg";
import nextIcon from "../assets/icons/next-js.svg";
import reactIcon from "../assets/icons/react-js.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import balsamicIcon from "../assets/icons/balsamic.svg";
import invisionIcon from "../assets/icons/invision.svg";
import figmaIcon from "../assets/icons/figma.svg";
import dockerIcon from "../assets/icons/docker.svg";
import postgresIcon from "../assets/icons/postgres.svg";
import pythonIcon from "../assets/icons/python.svg";
import nodeIcon from "../assets/icons/node-js.svg";
import phpIcon from "../assets/icons/php.svg";
import goIcon from "../assets/icons/go.svg";
import antIcon from "../assets/icons/ant-design.svg";
import gatsbyIcon from "../assets/icons/gatsby.png";
import vueIcon from "../assets/icons/vue-js.svg";
import prinsipleIcon from "../assets/icons/prinsiple.svg";
import sketchIcon from "../assets/icons/sketch.svg";
import adobeIcon from "../assets/icons/adobe-suite.svg";
import youIcon from "../assets/icons/you-track.svg";
import appiumIcon from "../assets/icons/appium.svg";
import cypressIcon from "../assets/icons/cypress.svg";
import jmeterIcon from "../assets/icons/jmeter.svg";
import mongoIcon from "../assets/icons/mongo.svg";
import cassandraIcon from "../assets/icons/cassandra.svg";
import sassIcon from "../assets/icons/sass.svg";
import materialIcon from "../assets/icons/material-ui.svg";
import zeplinIcon from "../assets/icons/zeplin.svg";
import illustratorIcon from "../assets/icons/adobe.svg";
import lottieIcon from "../assets/icons/lottie-icon.svg";
import photoshopIcon from "../assets/icons/photoshop.svg";

export const tools = [
  "Frontend",
  "Backend",
  "DevOps",
  "Testing",
  "UX/UI",
  "Infrastructure",
  "Mobile",
];

const toolsCardData = [
  { id: 1, icon: promotheusIcon, title: "Prometheus", category: "Devops" },
  { id: 2, icon: lokiIcon, title: "Loki", category: "Devops" },
  { id: 3, icon: bitbucketIcon, title: "Bitbucket", category: "Devops" },
  { id: 4, icon: gitlabIcon, title: "Gitlab", category: "Devops" },
  { id: 5, icon: kotlinIcon, title: "Kotlin", category: "Mobile" },
  { id: 6, icon: androidIcon, title: "Android", category: "Mobile" },
  { id: 7, icon: javaIcon, title: "Java", category: "Mobile" },
  { id: 8, icon: azureIcon, title: "Azure", category: "Infrastructure" },
  { id: 9, icon: gcpIcon, title: "GCP", category: "Infrastructure" },
  {
    id: 10,
    icon: digitalIcon,
    title: "DigitalOcean",
    category: "Infrastructure",
  },
  { id: 11, icon: awsIcon, title: "AWS", category: "Infrastructure" },
  {
    id: 12,
    icon: kubernetesIcon,
    title: "Kubernetes",
    category: "Infrastructure",
  },
  { id: 13, icon: elkIcon, title: "ELK", category: "Devops" },
  { id: 14, icon: grafanaIcon, title: "Grafana", category: "Devops" },
  { id: 15, icon: terraformIcon, title: "Terraform", category: "Devops" },
  { id: 16, icon: iosIcon, title: "IOS", category: "Mobile" },
  { id: 17, icon: swiftIcon, title: "Swift", category: "Mobile" },
  { id: 18, icon: flutterIcon, title: "Flutter", category: "Mobile" },
  { id: 19, icon: nextIcon, title: "Next.JS", category: "Frontend" },
  { id: 20, icon: reactIcon, title: "React.JS", category: "Frontend" },
  { id: 21, icon: javascriptIcon, title: "Javascript", category: "Frontend" },
  { id: 22, icon: balsamicIcon, title: "Balsamic", category: "UX/UI" },
  { id: 23, icon: invisionIcon, title: "Invision", category: "UX/UI" },
  { id: 24, icon: figmaIcon, title: "Figma", category: "UX/UI" },
  { id: 25, icon: dockerIcon, title: "Docker", category: "Devops" },
  { id: 26, icon: postgresIcon, title: "PostgreSQL", category: "Backend" },
  { id: 27, icon: pythonIcon, title: "Python", category: "Backend" },
  { id: 28, icon: nodeIcon, title: "Node.JS", category: "Backend" },
  { id: 29, icon: phpIcon, title: "PHP", category: "Backend" },
  { id: 30, icon: goIcon, title: "GO", category: "Backend" },
  { id: 31, icon: antIcon, title: "Ant Design", category: "Frontend" },
  { id: 32, icon: gatsbyIcon, title: "Gatsby.JS", category: "Frontend" },
  { id: 33, icon: vueIcon, title: "Vue.JS", category: "Frontend" },
  { id: 34, icon: prinsipleIcon, title: "Principle", category: "UX/UI" },
  { id: 35, icon: sketchIcon, title: "Sketch", category: "UX/UI" },
  { id: 36, icon: adobeIcon, title: "Adobe suite", category: "UX/UI" },
  { id: 37, icon: youIcon, title: "YouTrack", category: "Testing" },
  { id: 38, icon: appiumIcon, title: "Appium", category: "Testing" },
  { id: 39, icon: cypressIcon, title: "Cypress", category: "Testing" },
  { id: 40, icon: jmeterIcon, title: "Jmeter", category: "Testing" },
  { id: 41, icon: mongoIcon, title: "MongoDB", category: "Backend" },
  { id: 42, icon: cassandraIcon, title: "Cassandra", category: "Backend" },
  { id: 43, icon: sassIcon, title: "Sass", category: "Frontend" },
  { id: 44, icon: materialIcon, title: "Material UI", category: "Frontend" },
  { id: 45, icon: zeplinIcon, title: "Zeplin", category: "UX/UI" },
  { id: 46, icon: illustratorIcon, title: "Illustrator", category: "UX/UI" },
  { id: 47, icon: lottieIcon, title: "Lottie", category: "UX/UI" },
  { id: 48, icon: photoshopIcon, title: "Photoshop", category: "UX/UI" },
];

export default toolsCardData;
