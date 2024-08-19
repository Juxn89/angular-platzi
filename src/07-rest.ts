import { User, ROLES } from './01-enum'

const currentUser: User = {
  username: 'Zelda',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  return currentUser.role === ROLES.ADMIN
}

console.log( checkAdminRole() )

export const checkRole = (...roles: ROLES[]) => {
  return roles.includes(currentUser.role)
}

console.log( checkRole(ROLES.ADMIN, ROLES.SALLER) )