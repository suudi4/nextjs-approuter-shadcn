import { NextResponse } from 'next/server'

const users= [ { "id": "001", "name": "George Davis", "phoneNumber": "+9483705403", "callDate": "2023-09-07", "callTime": "12:46:13", "messageId": "ANC1", "theme": "ANC" }, { "id": "002", "name": "Bob Doe", "phoneNumber": "+8823630396", "callDate": "2023-09-07", "callTime": "07:48:20", "messageId": "ANC2", "theme": "ANC" }, { "id": "003", "name": "Diana Williams", "phoneNumber": "+7813351887", "callDate": "2023-08-30", "callTime": "19:27:56", "messageId": "BS1", "theme": "Birth Spacing (BS)" }, { "id": "004", "name": "Bob Garcia", "phoneNumber": "+5705674151", "callDate": "2023-09-13", "callTime": "07:15:57", "messageId": "BS2", "theme": "Birth Spacing (BS)" }, { "id": "005", "name": "Edward Miller", "phoneNumber": "+8911731619", "callDate": "2023-09-12", "callTime": "16:47:42", "messageId": "Nut1", "theme": "Nutrition (Nut)" }, { "id": "006", "name": "Edward Brown", "phoneNumber": "+9091467000", "callDate": "2023-09-06", "callTime": "22:38:09", "messageId": "BS3", "theme": "Birth Spacing (BS)" }, { "id": "007", "name": "Fiona Davis", "phoneNumber": "+1002948244", "callDate": "2023-09-10", "callTime": "12:01:05", "messageId": "ANC3", "theme": "ANC" }, { "id": "008", "name": "Edward Brown", "phoneNumber": "+8766609899", "callDate": "2023-09-24", "callTime": "13:56:02", "messageId": "Nut2", "theme": "Nutrition (Nut)" }, { "id": "009", "name": "Alice Davis", "phoneNumber": "+8164085242", "callDate": "2023-09-20", "callTime": "20:03:59", "messageId": "BS4", "theme": "Birth Spacing (BS)" }, { "id": "010", "name": "George Williams", "phoneNumber": "+7165747904", "callDate": "2023-09-05", "callTime": "13:56:37", "messageId": "BS5", "theme": "Birth Spacing (BS)" }, { "id": "011", "name": "Alice Davis", "phoneNumber": "+9371079217", "callDate": "2023-09-03", "callTime": "02:04:42", "messageId": "BS6", "theme": "Birth Spacing (BS)" }, { "id": "012", "name": "John Jones", "phoneNumber": "+1616573917", "callDate": "2023-09-04", "callTime": "06:11:36", "messageId": "BS7", "theme": "Birth Spacing (BS)" }, { "id": "013", "name": "Diana Davis", "phoneNumber": "+1666036178", "callDate": "2023-08-26", "callTime": "02:13:05", "messageId": "BS8", "theme": "Birth Spacing (BS)" }, { "id": "014", "name": "Edward Davis", "phoneNumber": "+7498268177", "callDate": "2023-09-08", "callTime": "05:00:17", "messageId": "ANC4", "theme": "ANC" }, { "id": "015", "name": "Fiona Miller", "phoneNumber": "+6248925270", "callDate": "2023-09-05", "callTime": "08:39:00", "messageId": "Nut3", "theme": "Nutrition (Nut)" }, { "id": "016", "name": "John Johnson", "phoneNumber": "+6970685593", "callDate": "2023-09-03", "callTime": "05:12:49", "messageId": "BS9", "theme": "Birth Spacing (BS)" }, { "id": "017", "name": "Edward Doe", "phoneNumber": "+6339253332", "callDate": "2023-08-25", "callTime": "03:28:35", "messageId": "BS10", "theme": "Birth Spacing (BS)" }, { "id": "018", "name": "Alice Doe", "phoneNumber": "+9105295886", "callDate": "2023-09-13", "callTime": "20:09:48", "messageId": "ANC5", "theme": "ANC" }, { "id": "019", "name": "Fiona Jones", "phoneNumber": "+2048263092", "callDate": "2023-08-30", "callTime": "07:46:16", "messageId": "ANC6", "theme": "ANC" }, { "id": "020", "name": "George Rodriguez", "phoneNumber": "+5041579985", "callDate": "2023-09-14", "callTime": "07:20:01", "messageId": "Nut4", "theme": "Nutrition (Nut)" }, { "id": "021", "name": "John Johnson", "phoneNumber": "+6622048908", "callDate": "2023-09-21", "callTime": "11:04:36", "messageId": "BS11", "theme": "Birth Spacing (BS)" }, { "id": "022", "name": "Hannah Miller", "phoneNumber": "+4741121324", "callDate": "2023-09-18", "callTime": "08:33:15", "messageId": "BS12", "theme": "Birth Spacing (BS)" }, { "id": "023", "name": "John Davis", "phoneNumber": "+3076170939", "callDate": "2023-09-20", "callTime": "08:47:38", "messageId": "Nut5", "theme": "Nutrition (Nut)" }, { "id": "024", "name": "Bob Garcia", "phoneNumber": "+6961515761", "callDate": "2023-08-31", "callTime": "21:33:39", "messageId": "ANC7", "theme": "ANC" }, { "id": "025", "name": "Bob Miller", "phoneNumber": "+9283712590", "callDate": "2023-09-20", "callTime": "23:11:18", "messageId": "Nut6", "theme": "Nutrition (Nut)" }, { "id": "026", "name": "Jane Miller", "phoneNumber": "+4376173743", "callDate": "2023-09-12", "callTime": "11:18:09", "messageId": "Nut7", "theme": "Nutrition (Nut)" }, { "id": "027", "name": "Charlie Jones", "phoneNumber": "+5041280035", "callDate": "2023-09-02", "callTime": "08:44:27", "messageId": "BS13", "theme": "Birth Spacing (BS)" }, { "id": "028", "name": "Charlie Miller", "phoneNumber": "+7685534879", "callDate": "2023-08-28", "callTime": "16:46:35", "messageId": "Nut8", "theme": "Nutrition (Nut)" }, { "id": "029", "name": "Jane Johnson", "phoneNumber": "+8491260308", "callDate": "2023-08-25", "callTime": "15:51:46", "messageId": "Nut9", "theme": "Nutrition (Nut)" }, { "id": "030", "name": "Hannah Garcia", "phoneNumber": "+8553517034", "callDate": "2023-09-16", "callTime": "20:14:04", "messageId": "BS14", "theme": "Birth Spacing (BS)" }, { "id": "031", "name": "Jane Williams", "phoneNumber": "+6855591800", "callDate": "2023-09-19", "callTime": "16:42:01", "messageId": "BS15", "theme": "Birth Spacing (BS)" }, { "id": "032", "name": "Jane Smith", "phoneNumber": "+4539326528", "callDate": "2023-09-13", "callTime": "12:11:06", "messageId": "Nut10", "theme": "Nutrition (Nut)" }, { "id": "033", "name": "Diana Davis", "phoneNumber": "+8877302507", "callDate": "2023-09-22", "callTime": "12:13:03", "messageId": "Nut11", "theme": "Nutrition (Nut)" }, { "id": "034", "name": "John Doe", "phoneNumber": "+7738711010", "callDate": "2023-09-17", "callTime": "20:49:33", "messageId": "Nut12", "theme": "Nutrition (Nut)" }, { "id": "035", "name": "George Davis", "phoneNumber": "+2753111028", "callDate": "2023-09-15", "callTime": "20:33:18", "messageId": "ANC8", "theme": "ANC" }, { "id": "036", "name": "Bob Smith", "phoneNumber": "+7700366204", "callDate": "2023-09-02", "callTime": "22:14:05", "messageId": "ANC9", "theme": "ANC" }, { "id": "037", "name": "George Miller", "phoneNumber": "+2195539803", "callDate": "2023-09-22", "callTime": "09:36:02", "messageId": "ANC10", "theme": "ANC" }, { "id": "038", "name": "Bob Rodriguez", "phoneNumber": "+7028889579", "callDate": "2023-09-06", "callTime": "12:12:44", "messageId": "BS16", "theme": "Birth Spacing (BS)" }, { "id": "039", "name": "Bob Rodriguez", "phoneNumber": "+9057090272", "callDate": "2023-09-22", "callTime": "14:18:19", "messageId": "BS17", "theme": "Birth Spacing (BS)" }, { "id": "040", "name": "Diana Miller", "phoneNumber": "+8003772210", "callDate": "2023-08-27", "callTime": "01:08:46", "messageId": "Nut13", "theme": "Nutrition (Nut)" }, { "id": "041", "name": "Jane Davis", "phoneNumber": "+8642185573", "callDate": "2023-09-09", "callTime": "18:31:02", "messageId": "Nut14", "theme": "Nutrition (Nut)" }, { "id": "042", "name": "Alice Jones", "phoneNumber": "+4994726569", "callDate": "2023-09-18", "callTime": "10:31:19", "messageId": "ANC11", "theme": "ANC" }, { "id": "043", "name": "Bob Rodriguez", "phoneNumber": "+3017803738", "callDate": "2023-08-28", "callTime": "20:28:48", "messageId": "BS18", "theme": "Birth Spacing (BS)" }, { "id": "044", "name": "Charlie Miller", "phoneNumber": "+9062573989", "callDate": "2023-09-17", "callTime": "12:46:20", "messageId": "ANC12", "theme": "ANC" }, { "id": "045", "name": "George Davis", "phoneNumber": "+4179850848", "callDate": "2023-09-09", "callTime": "23:56:59", "messageId": "ANC13", "theme": "ANC" }, { "id": "046", "name": "Bob Smith", "phoneNumber": "+6824735533", "callDate": "2023-09-10", "callTime": "18:59:56", "messageId": "BS19", "theme": "Birth Spacing (BS)" }, { "id": "047", "name": "Bob Smith", "phoneNumber": "+2652605647", "callDate": "2023-09-09", "callTime": "18:15:01", "messageId": "Nut15", "theme": "Nutrition (Nut)" }, { "id": "048", "name": "Charlie Brown", "phoneNumber": "+3650166082", "callDate": "2023-09-03", "callTime": "10:18:59", "messageId": "ANC14", "theme": "ANC" }, { "id": "049", "name": "Jane Jones", "phoneNumber": "+2574675281", "callDate": "2023-09-18", "callTime": "06:45:33", "messageId": "Nut16", "theme": "Nutrition (Nut)" }, { "id": "050", "name": "Charlie Brown", "phoneNumber": "+9171986604", "callDate": "2023-09-11", "callTime": "04:49:34", "messageId": "BS20", "theme": "Birth Spacing (BS)" }, { "id": "051", "name": "Charlie Rodriguez", "phoneNumber": "+5272788899", "callDate": "2023-09-20", "callTime": "11:47:23", "messageId": "ANC15", "theme": "ANC" }, { "id": "052", "name": "Jane Smith", "phoneNumber": "+6037253434", "callDate": "2023-09-06", "callTime": "08:19:39", "messageId": "ANC16", "theme": "ANC" }, { "id": "053", "name": "John Williams", "phoneNumber": "+3210234589", "callDate": "2023-08-26", "callTime": "22:11:07", "messageId": "ANC17", "theme": "ANC" }, { "id": "054", "name": "Alice Garcia", "phoneNumber": "+3240591355", "callDate": "2023-09-05", "callTime": "06:22:23", "messageId": "BS21", "theme": "Birth Spacing (BS)" }, { "id": "055", "name": "Hannah Brown", "phoneNumber": "+6769273704", "callDate": "2023-09-02", "callTime": "09:24:14", "messageId": "Nut17", "theme": "Nutrition (Nut)" }, { "id": "056", "name": "Alice Garcia", "phoneNumber": "+6778307568", "callDate": "2023-08-27", "callTime": "13:30:46", "messageId": "BS22", "theme": "Birth Spacing (BS)" }, { "id": "057", "name": "Fiona Rodriguez", "phoneNumber": "+1841546365", "callDate": "2023-09-21", "callTime": "21:59:18", "messageId": "Nut18", "theme": "Nutrition (Nut)" }, { "id": "058", "name": "Hannah Johnson", "phoneNumber": "+8840820341", "callDate": "2023-09-24", "callTime": "21:51:58", "messageId": "BS23", "theme": "Birth Spacing (BS)" }, { "id": "059", "name": "Jane Davis", "phoneNumber": "+3730811796", "callDate": "2023-09-08", "callTime": "11:38:38", "messageId": "Nut19", "theme": "Nutrition (Nut)" }, { "id": "060", "name": "Edward Davis", "phoneNumber": "+9595573133", "callDate": "2023-09-19", "callTime": "22:34:58", "messageId": "ANC18", "theme": "ANC" }, { "id": "061", "name": "Alice Davis", "phoneNumber": "+9372333636", "callDate": "2023-08-30", "callTime": "14:45:41", "messageId": "Nut20", "theme": "Nutrition (Nut)" }, { "id": "062", "name": "Alice Smith", "phoneNumber": "+3542829498", "callDate": "2023-09-07", "callTime": "03:55:34", "messageId": "BS24", "theme": "Birth Spacing (BS)" }, { "id": "063", "name": "George Johnson", "phoneNumber": "+2645498739", "callDate": "2023-08-29", "callTime": "06:41:01", "messageId": "ANC19", "theme": "ANC" }, { "id": "064", "name": "Jane Smith", "phoneNumber": "+1202811605", "callDate": "2023-08-25", "callTime": "01:41:31", "messageId": "Nut21", "theme": "Nutrition (Nut)" }, { "id": "065", "name": "Diana Williams", "phoneNumber": "+1436788311", "callDate": "2023-09-02", "callTime": "06:39:07", "messageId": "BS25", "theme": "Birth Spacing (BS)" }, { "id": "066", "name": "Bob Williams", "phoneNumber": "+3851462529", "callDate": "2023-08-25", "callTime": "05:45:09", "messageId": "ANC20", "theme": "ANC" }, { "id": "067", "name": "Charlie Doe", "phoneNumber": "+8443034318", "callDate": "2023-08-31", "callTime": "10:13:32", "messageId": "Nut22", "theme": "Nutrition (Nut)" }, { "id": "068", "name": "John Smith", "phoneNumber": "+1045649633", "callDate": "2023-08-31", "callTime": "15:00:17", "messageId": "ANC21", "theme": "ANC" }, { "id": "069", "name": "Charlie Davis", "phoneNumber": "+3540431117", "callDate": "2023-09-17", "callTime": "05:34:07", "messageId": "ANC22", "theme": "ANC" }, { "id": "070", "name": "John Doe", "phoneNumber": "+1495738293", "callDate": "2023-09-18", "callTime": "06:45:20", "messageId": "BS26", "theme": "Birth Spacing (BS)" }, { "id": "071", "name": "Diana Johnson", "phoneNumber": "+3654388711", "callDate": "2023-08-29", "callTime": "13:13:16", "messageId": "ANC23", "theme": "ANC" }, { "id": "072", "name": "Jane Johnson", "phoneNumber": "+3312958270", "callDate": "2023-09-13", "callTime": "19:44:10", "messageId": "ANC24", "theme": "ANC" }, { "id": "073", "name": "Diana Smith", "phoneNumber": "+8244789939", "callDate": "2023-09-07", "callTime": "13:41:26", "messageId": "BS27", "theme": "Birth Spacing (BS)" }, { "id": "074", "name": "Diana Smith", "phoneNumber": "+5700972301", "callDate": "2023-09-21", "callTime": "16:42:36", "messageId": "ANC25", "theme": "ANC" }, { "id": "075", "name": "Bob Jones", "phoneNumber": "+3119642101", "callDate": "2023-08-29", "callTime": "06:37:57", "messageId": "BS28", "theme": "Birth Spacing (BS)" }, { "id": "076", "name": "Fiona Brown", "phoneNumber": "+8342389341", "callDate": "2023-08-25", "callTime": "21:01:04", "messageId": "Nut23", "theme": "Nutrition (Nut)" }, { "id": "077", "name": "Bob Smith", "phoneNumber": "+4955035253", "callDate": "2023-09-19", "callTime": "07:54:26", "messageId": "Nut24", "theme": "Nutrition (Nut)" }, { "id": "078", "name": "Jane Garcia", "phoneNumber": "+1238844269", "callDate": "2023-09-24", "callTime": "13:04:18", "messageId": "ANC26", "theme": "ANC" }, { "id": "079", "name": "George Davis", "phoneNumber": "+9500468477", "callDate": "2023-09-02", "callTime": "20:07:41", "messageId": "ANC27", "theme": "ANC" }, { "id": "080", "name": "Edward Johnson", "phoneNumber": "+8915888364", "callDate": "2023-08-30", "callTime": "12:06:00", "messageId": "Nut25", "theme": "Nutrition (Nut)" }, { "id": "081", "name": "Fiona Johnson", "phoneNumber": "+8295953944", "callDate": "2023-08-31", "callTime": "06:10:29", "messageId": "Nut26", "theme": "Nutrition (Nut)" }, { "id": "082", "name": "Alice Brown", "phoneNumber": "+6845200267", "callDate": "2023-09-15", "callTime": "07:33:42", "messageId": "Nut27", "theme": "Nutrition (Nut)" }, { "id": "083", "name": "Diana Johnson", "phoneNumber": "+8779411321", "callDate": "2023-09-22", "callTime": "07:58:29", "messageId": "ANC28", "theme": "ANC" }, { "id": "084", "name": "Fiona Jones", "phoneNumber": "+9314369396", "callDate": "2023-08-27", "callTime": "02:09:13", "messageId": "BS29", "theme": "Birth Spacing (BS)" }, { "id": "085", "name": "Alice Garcia", "phoneNumber": "+2605305069", "callDate": "2023-09-06", "callTime": "06:53:42", "messageId": "ANC29", "theme": "ANC" }, { "id": "086", "name": "Diana Doe", "phoneNumber": "+5618904138", "callDate": "2023-09-21", "callTime": "08:39:36", "messageId": "BS30", "theme": "Birth Spacing (BS)" }, { "id": "087", "name": "George Garcia", "phoneNumber": "+5039440925", "callDate": "2023-09-22", "callTime": "04:37:56", "messageId": "BS31", "theme": "Birth Spacing (BS)" }, { "id": "088", "name": "John Davis", "phoneNumber": "+3188736328", "callDate": "2023-09-11", "callTime": "09:27:13", "messageId": "Nut28", "theme": "Nutrition (Nut)" }, { "id": "089", "name": "Edward Williams", "phoneNumber": "+6785075508", "callDate": "2023-09-18", "callTime": "02:55:54", "messageId": "ANC30", "theme": "ANC" }, { "id": "090", "name": "George Miller", "phoneNumber": "+5942345206", "callDate": "2023-09-19", "callTime": "14:09:46", "messageId": "ANC31", "theme": "ANC" }, { "id": "091", "name": "Fiona Rodriguez", "phoneNumber": "+2727506548", "callDate": "2023-09-07", "callTime": "14:48:20", "messageId": "Nut29", "theme": "Nutrition (Nut)" }, { "id": "092", "name": "George Brown", "phoneNumber": "+9253977193", "callDate": "2023-09-01", "callTime": "17:41:35", "messageId": "BS32", "theme": "Birth Spacing (BS)" }, { "id": "093", "name": "Fiona Johnson", "phoneNumber": "+6498129132", "callDate": "2023-09-21", "callTime": "07:06:04", "messageId": "ANC32", "theme": "ANC" }, { "id": "094", "name": "Edward Rodriguez", "phoneNumber": "+2444976911", "callDate": "2023-09-10", "callTime": "10:27:02", "messageId": "ANC33", "theme": "ANC" }, { "id": "095", "name": "Alice Doe", "phoneNumber": "+5920758607", "callDate": "2023-09-19", "callTime": "07:02:25", "messageId": "ANC34", "theme": "ANC" }, { "id": "096", "name": "Bob Smith", "phoneNumber": "+4582172680", "callDate": "2023-08-25", "callTime": "16:44:11", "messageId": "BS33", "theme": "Birth Spacing (BS)" }, { "id": "097", "name": "Fiona Rodriguez", "phoneNumber": "+3316854258", "callDate": "2023-08-29", "callTime": "05:55:30", "messageId": "ANC35", "theme": "ANC" }, { "id": "098", "name": "Bob Johnson", "phoneNumber": "+7824303868", "callDate": "2023-09-23", "callTime": "11:02:58", "messageId": "Nut30", "theme": "Nutrition (Nut)" }, { "id": "099", "name": "Diana Jones", "phoneNumber": "+2318296181", "callDate": "2023-08-31", "callTime": "04:33:22", "messageId": "BS34", "theme": "Birth Spacing (BS)" }, { "id": "100", "name": "Edward Smith", "phoneNumber": "+6350378013", "callDate": "2023-09-23", "callTime": "11:03:57", "messageId": "BS35", "theme": "Birth Spacing (BS)" } ] 
  
 
export async function GET(request: Request) {
  
 

 
  return NextResponse.json({ users })
}