const csisPollster = {
  jokowiCsisPollingResult() {
    document.getElementById("csis1").innerHTML = `${this.jokowiamin}`;
  },
  prabowoCsisPollingResult() {
    document.getElementById("csis2").innerHTML = `${this.prabowosandi}`;
  }
};

const cpPollster = {
  jokowiCpPollingResult() {
    document.getElementById("cp1").innerHTML = `${this.jokowiamin}`;
  },
  prabowoCpPollingResult() {
    document.getElementById("cp2").innerHTML = `${this.prabowosandi}`;
  }
};

const centerStrategicInternationalStudies = {
  jokowiamin: 55.8,
  prabowosandi: 44.2
};

const chartaPolitika = {
  jokowiamin: 54.3,
  prabowosandi: 45.7
};

const csisJokowiResult = csisPollster.jokowiCsisPollingResult.bind(
  centerStrategicInternationalStudies
);
const csisPrabowoResult = csisPollster.prabowoCsisPollingResult.bind(
  centerStrategicInternationalStudies
);
const cpJokowiResult = cpPollster.jokowiCpPollingResult.bind(chartaPolitika);
const cpPrabowoResult = cpPollster.prabowoCpPollingResult.bind(chartaPolitika);

csisJokowiResult();
csisPrabowoResult();
cpJokowiResult();
cpPrabowoResult();
