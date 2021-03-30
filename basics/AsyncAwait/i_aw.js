// MULTIPLE AWAITS

const count = (x) => {
  setTimeout(() => {
    console.log(x + 1);
  }, 1000);
};

const keepCounting = async () => {
  try {
    await count(1);
    await count(2);
    await count(3);
    await count(4);
    await count(5);
    await count(6);
  } catch (err) {
    console.log(err);
  }
};

keepCounting();
