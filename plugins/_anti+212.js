let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('212' || '212')) {
   	global.db.data.users[m.sender].banned = true
   }
   
   if (m.sender.startsWith('967' || '967')) {
   	global.db.data.users[m.sender].banned = true
   }
   
   if (m.sender.startsWith('20' || '20')) {
   	global.db.data.users[m.sender].banned = true
   }

   if (m.sender.startsWith('265' || '265')) {
   	global.db.data.users[m.sender].banned = true
   } 
    }

module.exports = handler