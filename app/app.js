const express = require('express');

const app = express();

app.get('/', (req, res) => {
    nodeName = `<p><b>Node name: </b>` + process.env.K8_NODE_NAME + `</p>`;
    podName = `<p><b>Pod name: </b>` + process.env.K8_POD_NAME + `</p>`;
    namespace = `<p><b>Namespace: </b>` + process.env.K8_POD_NAMESPACE + `</p>`;
    podIp = `<p><b>IP: </b>` + process.env.K8_POD_IP + `</p>`;


    res.send(`
    <h1>k8s informations</h1>
  ` + nodeName + podName + namespace + podIp);
});

app.listen(3000);