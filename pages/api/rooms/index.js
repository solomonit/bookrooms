import { createRouter  } from 'next-connect' // mặc định syntax mới phải là createRouter
import { allRooms } from '../../../controllers/roomControllers'

const router = createRouter();
router.get(allRooms)
export default router.handler();



