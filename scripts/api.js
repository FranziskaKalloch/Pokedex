function getPromise() {}

async function usePromise() {
  let prom = await getPromise();
  console.log(prom);
}
