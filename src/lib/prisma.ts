import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  // log: ['query'],
})

prisma.user
  .delete({
    where: {
      id: '32356f3a-5bc7-4d2d-9313-d1757ddc0233',
    },
  })
  .then(() => {
    console.log('deleted')
  })
