const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';//para eliminar los datos en nuestra direccion y poder acceder a una localización

export default getHash;