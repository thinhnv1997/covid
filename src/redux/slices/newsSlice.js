import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      title: "Săn vaccine Covid-19",
      description:
        "Kim Hyun-jin nhìn chăm chú vào màn hình, ngón tay liên tục quét bản đồ vaccine trực tuyến Seoul, mong săn được suất tiêm thừa ai đó bỏ sót. Nhưng sau 10 ngày điên cuồng quét màn hình, Kim, 32 tuổi, không tìm được suất tiêm nào bởi vaccine khan hiếm do số ca Covid-19 tại Seoul tăng vọt từ tuần trước và không ngừng lập kỷ lục mỗi ngày. Đây chính là cuộc chiến, Kim nói, chìa điện thoại hiển thị bản đồ cho thấy không còn suất tiêm vaccine nào ở phía nam Seoul.Không còn suất nào dù tôi có quét màn hình điên cuồng tới đâu. Tôi rất tức giận, vô vọng, cảm thấy đang lãng phí thời gian.",
      img: "https://i-vnexpress.vnecdn.net/2021/07/16/TBH2VUZCXVMHHK5JDBZCKEQDBI-162-5270-6440-1626430470_m_140x84.jpg",
    },
    {
      id: 2,
      title: "Ngừa Covid-19 khi đi chợ",
      description:
        "Bộ Y tế khuyến cáo, khách hàng, người lao động, người hàng phải thực hiện khai báo y tế hàng ngày khi đến chợ để làm việc và mua hàng. Tuân thủ quy tắc 5K. Người mua hàng bắt buộc đeo khẩu trang đúng cách và thải bỏ ngay sau khi sử dụng (nếu là loại dùng một lần) vào thùng rác đúng quy định. Che mũi, miệng khi ho và hắt hơi. Thường xuyên rửa tay với xà phòng và nước sạch hoặc dung dịch sát khuẩn tay trong thời gian có mặt ở chợ.",
      img: "https://i-suckhoe.vnecdn.net/2021/07/26/phieudicho11624683732-16273001-6934-5828-1627300337_m_140x84.jpg",
    },
    {
      id: 3,
      title: "Covid-19 thách thức Olympic",
      description:
        "Nỗi lo Covid-19 có thể làm gián đoạn Olympic ở Tokyo đang ngày một lớn hơn, khi các ca nhiễm liên quan đến các vận động viên gia tăng. Loạt ca nhiễm đang tăng nhanh chóng chứng minh việc tổ chức một trong những sự kiện thể thao lớn nhất thế giới khó khăn như thế nào vào thời kỳ đại dịch toàn cầu. Hàng chục nghìn người từ hơn 200 quốc gia đang nhập cảnh vào một nước có tỷ lệ tiêm chủng còn thấp và biến chủng Delta đang hoành hành để tham dự Olympic Tokyo.",
      img: "https://i-vnexpress.vnecdn.net/2021/07/19/0dee61bec95c5b0af506659b1428e3-2206-7184-1626675133_m_140x84.jpg",
    },
    {
      id: 4,
      title: "Những đứa trẻ mắc Covid",
      description:
        "Bé trai hai tháng tuổi vừa mắc Covid-19, vừa bị hạ canxi nằm thiêm thiếp trên giường chăm sóc đặc biệt, người mẹ trẻ ngủ gục cạnh bên. Bác sĩ Phạm Thái Sơn, 37 tuổi, phó khoa Nhiễm, phụ trách Đơn vị điều trị Covid-19 trẻ em tại Bệnh viện Nhi đồng 2, cho biết trước đó bé nhập viện Nhi đồng 1 cấp cứu trong tình trạng co giật vì bị hạ canxi.Khi xét nghiệm tầm soát, bé được phát hiện dương tính nCoV nhưng không có triệu chứng và chuyển tới Bệnh viện Nhi đồng 2, vừa điều trị Covid-19 vừa điều trị bệnh nền hạ canxi.",
      img: "https://i-suckhoe.vnecdn.net/2021/07/15/bac-si-xot-xa-benh-nhi-covid-1-9659-8953-1626315206_m_140x84.jpg",
    },
    {
      id: 5,
      title: "Săn vaccine Covid-19",
      description:
        "Kim Hyun-jin nhìn chăm chú vào màn hình, ngón tay liên tục quét bản đồ vaccine trực tuyến Seoul, mong săn được suất tiêm thừa ai đó bỏ sót. Nhưng sau 10 ngày điên cuồng quét màn hình, Kim, 32 tuổi, không tìm được suất tiêm nào bởi vaccine khan hiếm do số ca Covid-19 tại Seoul tăng vọt từ tuần trước và không ngừng lập kỷ lục mỗi ngày. Đây chính là cuộc chiến, Kim nói, chìa điện thoại hiển thị bản đồ cho thấy không còn suất tiêm vaccine nào ở phía nam Seoul.Không còn suất nào dù tôi có quét màn hình điên cuồng tới đâu. Tôi rất tức giận, vô vọng, cảm thấy đang lãng phí thời gian.",
      img: "https://i-vnexpress.vnecdn.net/2021/07/16/TBH2VUZCXVMHHK5JDBZCKEQDBI-162-5270-6440-1626430470_m_140x84.jpg",
    },
    {
      id: 6,
      title: "Ngừa Covid-19 khi đi chợ",
      description:
        "Bộ Y tế khuyến cáo, khách hàng, người lao động, người hàng phải thực hiện khai báo y tế hàng ngày khi đến chợ để làm việc và mua hàng. Tuân thủ quy tắc 5K. Người mua hàng bắt buộc đeo khẩu trang đúng cách và thải bỏ ngay sau khi sử dụng (nếu là loại dùng một lần) vào thùng rác đúng quy định. Che mũi, miệng khi ho và hắt hơi. Thường xuyên rửa tay với xà phòng và nước sạch hoặc dung dịch sát khuẩn tay trong thời gian có mặt ở chợ.",
      img: "https://i-suckhoe.vnecdn.net/2021/07/26/phieudicho11624683732-16273001-6934-5828-1627300337_m_140x84.jpg",
    },
    {
      id: 7,
      title: "Covid-19 thách thức Olympic",
      description:
        "Nỗi lo Covid-19 có thể làm gián đoạn Olympic ở Tokyo đang ngày một lớn hơn, khi các ca nhiễm liên quan đến các vận động viên gia tăng. Loạt ca nhiễm đang tăng nhanh chóng chứng minh việc tổ chức một trong những sự kiện thể thao lớn nhất thế giới khó khăn như thế nào vào thời kỳ đại dịch toàn cầu. Hàng chục nghìn người từ hơn 200 quốc gia đang nhập cảnh vào một nước có tỷ lệ tiêm chủng còn thấp và biến chủng Delta đang hoành hành để tham dự Olympic Tokyo.",
      img: "https://i-vnexpress.vnecdn.net/2021/07/19/0dee61bec95c5b0af506659b1428e3-2206-7184-1626675133_m_140x84.jpg",
    },
    {
      id: 8,
      title: "Những đứa trẻ mắc Covid",
      description:
        "Bé trai hai tháng tuổi vừa mắc Covid-19, vừa bị hạ canxi nằm thiêm thiếp trên giường chăm sóc đặc biệt, người mẹ trẻ ngủ gục cạnh bên. Bác sĩ Phạm Thái Sơn, 37 tuổi, phó khoa Nhiễm, phụ trách Đơn vị điều trị Covid-19 trẻ em tại Bệnh viện Nhi đồng 2, cho biết trước đó bé nhập viện Nhi đồng 1 cấp cứu trong tình trạng co giật vì bị hạ canxi.Khi xét nghiệm tầm soát, bé được phát hiện dương tính nCoV nhưng không có triệu chứng và chuyển tới Bệnh viện Nhi đồng 2, vừa điều trị Covid-19 vừa điều trị bệnh nền hạ canxi.",
      img: "https://i-suckhoe.vnecdn.net/2021/07/15/bac-si-xot-xa-benh-nhi-covid-1-9659-8953-1626315206_m_140x84.jpg",
    },
  ],
};

const news = createSlice({
  name: "newsSlice",
  initialState: initialState,
  reducers: {},
});

const { actions, reducer } = news;
export { actions as NewsAction, reducer as NewsReducer };
