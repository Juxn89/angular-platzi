enum ROLES {
  ADMIN = 'admin',
  SALLER = 'seller',
  CUSTOMER = 'customer'
}

type User = {
  username: string,
  role: ROLES
}

const newUser: User = {
  username: 'Zelda',
  role: ROLES.ADMIN
}