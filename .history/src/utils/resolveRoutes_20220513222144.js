const resolveRoutes = (route) => {//ruta de los archivos
    if (route.length <= 3) {//si la ruta pertece a la cantidad de los datos generados mas abajo
      let validRoute = route === '/' ? route : '/:id'; //para aber si es igual al slash caso contrario retorna el valor en este caso el ID
      return validRoute;
    }
    return `/${route}`;
  };
  
  export default resolveRoutes;