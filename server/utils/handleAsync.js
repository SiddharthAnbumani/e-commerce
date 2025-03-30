function handleAsync(fn) {
    return (req, res, next) => {
      Promise.resolve(fn(req, res, next))
        .catch((error) => {
          console.error("Error:", error); 
          next(error);
        });
    };
  }