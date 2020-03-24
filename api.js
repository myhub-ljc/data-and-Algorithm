/* api接口统一管理
 */
import {get,post} from './httpnew';

var apiBase = 'http://47.92.255.142:8080/yc';
 
 var api = {
   //登录
   getCaptcha: (param) => get(apiBase+"/captcha.jpg", param), //home 首页信息
   adminLogin: (param) => post(apiBase+"/sys/login", param),
   userLogin: (param) => post(apiBase+"/sys/weblogin", param),
   
   //部门管理
   departmentList:(param) => get(apiBase+"/tywdepart/list", param),
   departmentAdd:(param) =>post(apiBase+"/tywdepart/save", param),
   departmentUpdate:(param) =>post(apiBase+"/tywdepart/update", param),
   departmentDelete:(param) =>post(apiBase+"/tywdepart/delete", param),
   departmentDisable:(param) =>post(apiBase+"/tywdepart/forbidden", param),
   departmentEnable:(param) =>post(apiBase+"/tywdepart/awaken", param),
   departmentCourse:(param) => get(apiBase+"/tywdepart/departcourse", param),
  
   //岗位管理
   postList:(param) => get(apiBase+"/jobpost/list", param),
   postAdd:(param) =>post(apiBase+"/jobpost/add", param),
   postUpdate:(param) =>post(apiBase+"/jobpost/update", param),
   postDelete:(param) =>post(apiBase+"/jobpost/delete", param),
   postCourse:(param) => get(apiBase+"/jobpost/postcourse", param),
   
   //学员管理
   staffList:(param) => get(apiBase+"/staff/list", param),
   staffAdd:(param) => post(apiBase+"/staff/save", param),
   staffUpdate:(param) =>post(apiBase+"/staff/update", param),
   staffDelete:(param) =>post(apiBase+"/staff/delete", param),
   staffDisable:(param) =>post(apiBase+"/staff/disable", param),
   staffEnable:(param) =>post(apiBase+"/staff/enable", param),
   staffChangePsd:(param) =>post(apiBase+"/staff/changepassword", param),
   staffResetPsd:(param) =>post(apiBase+"/staff/resetpsd", param),
   staffEnable:(param) =>post(apiBase+"/staff/enable", param),
   staffAdjustPost:(param) =>post(apiBase+"/staff/adjustPost", param),
   staffCourse:(param) => get(apiBase+"/my/mycourse", param),
   staffImage:(param) => get(apiBase+"/staff/getimage", param),
   
   //课程管理
   courseList:(param) => get(apiBase+"/course/list", param),
   courseAdd:(param) => post(apiBase+"/course/save", param),
   courseUpdate:(param) =>post(apiBase+"/course/update", param),
   courseDelete:(param) =>post(apiBase+"/course/delete", param),
   courseData:(param) => get(apiBase+"/course/getcoursedata", param),
   courseImage:(param) => get(apiBase+"/course/getimage", param),
   
   //学习资料
   dataList:(param) => get(apiBase+"/studydata/list", param),
   dataAdd:(param) => post(apiBase+"/studydata/save", param),
   dataUpdate:(param) =>post(apiBase+"/studydata/update", param),
   dataDelete:(param) =>post(apiBase+"/studydata/delete", param),
   dataResourse:(param) => get(apiBase+"/studydata/getresource", param),
   dataQuestion:(param) => get(apiBase+"/testquestion/querybydata", param),
   
   //试题
   questionList:(param) => get(apiBase+"/testquestion/list", param),
   questionAdd:(param) => post(apiBase+"/testquestion/add", param),
   questionUpdate:(param) =>post(apiBase+"/testquestion/update", param),
   questionDelete:(param) =>post(apiBase+"/testquestion/delete", param),
   
   //考试
   examList:(param) => get(apiBase+"/exam/list", param),
   examAdd:(param) => post(apiBase+"/exam/add", param),
   examUpdate:(param) =>post(apiBase+"/exam/update", param),
   examDelete:(param) =>post(apiBase+"/exam/delete", param),
   examPublish:(param) =>post(apiBase+"/exam/examPublish", param),
   //未考试员工和考试提醒
   
   //通知公告
   noticeList:(param) => get(apiBase+"/notice/list", param),
   noticeAdd:(param) => post(apiBase+"/notice/add", param),
   noticeUpdate:(param) =>post(apiBase+"/notice/update", param),
   noticeDelete:(param) =>post(apiBase+"/notice/delete", param),
   noticePublish:(param) =>post(apiBase+"/notice/examPublish", param),
   
   //签到统计
   statSigined:(param) => get(apiBase+"/my/siginedstat", param),
   
   //学习统计
   statStudy:(param) => get(apiBase+"/analysis/studystat", param),
   
   //考试查询
   statExam:(param) => get(apiBase+"/exam/queryexamresult", param)
 
 }
 
 export default api
