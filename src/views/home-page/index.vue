<template>
  <div class="home-page-wrap">
    <div class="order-sales-wrap">
      <div class="order-today">
        <div>
          <div><span>今日订单总数</span></div>
          <div>200</div>
        </div>
        <img src="../../../public/images/order-t.png" alt="" />
      </div>
      <div class="sales-today">
        <div>
          <div><span>今日销售总额</span></div>
          <div>400</div>
        </div>
        <img src="../../../public/images/sales-t.png" alt="" />
      </div>
      <div class="sales-yestarday">
        <div>
          <div><span>昨日销售总额</span></div>
          <div>600</div>
        </div>
        <img src="../../../public/images/sales-y.png" alt="" />
      </div>
      <div class="sales-week">
        <div>
          <div><span>近7天销售总额</span></div>
          <div>1000</div>
        </div>
        <img src="../../../public/images/sales-total.png" alt="" />
      </div>
    </div>
    <div class="home-overview-wrap">
      <div class="course-overview">
        <div class="course-title">
          <svg-icon iconName="#icon-course-overview"></svg-icon>
          <span>课程总览</span>
        </div>
        <div class="course-data">
          <div>
            <div>
              <span>100</span>
            </div>
            <div>
              <span class="data-text">已上架</span>
            </div>
          </div>
          <div>
            <div>
              <span>400</span>
            </div>
            <div>
              <span class="data-text">已下架</span>
            </div>
          </div>
          <div>
            <div>
              <span>50</span>
            </div>
            <div>
              <span class="data-text">已结课</span>
            </div>
          </div>
          <div>
            <div>
              <span>5000</span>
            </div>
            <div>
              <span class="data-text">全部课程</span>
            </div>
          </div>
        </div>
      </div>
      <div class="user-overview">
        <div class="user-title">
          <svg-icon iconName="#icon-user-overview"></svg-icon>
          <span>用户总览</span>
        </div>
        <div class="user-data">
          <div>
            <div>
              <span>100</span>
            </div>
            <div>
              <span class="data-text">今日新增</span>
            </div>
          </div>
          <div>
            <div>
              <span>200</span>
            </div>
            <div>
              <span class="data-text">昨日新增</span>
            </div>
          </div>
          <div>
            <div>
              <span>1000</span>
            </div>
            <div>
              <span class="data-text">本月新增</span>
            </div>
          </div>
          <div>
            <div>
              <span>5000</span>
            </div>
            <div>
              <span class="data-text">用户总数</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="order-statistics-wrap">
      <div class="order-title">
        <span>订单统计</span>
      </div>
      <div class="order-statistics-area">
        <div class="order-statistics-left">
          <div class="order-week">
            <div class="order-left-title">
              <span>本周订单数量</span>
            </div>
            <div class="order-left-data">
              <span>1000</span>
            </div>
            <div class="order-left-change">
              <svg-icon iconName="#icon-increase"></svg-icon>
              <span>10%</span>
              <span class="order-left-change-text">同比上周</span>
            </div>
          </div>
          <div class="order-month">
            <div class="order-left-title">
              <span>本月订单数量</span>
            </div>
            <div class="order-left-data">
              <span>10000</span>
            </div>
            <div class="order-left-change">
              <svg-icon iconName="#icon-decline"></svg-icon>
              <span>10%</span>
              <span class="order-left-change-text">同比上月</span>
            </div>
          </div>
        </div>
        <div class="order-statistics-right"></div>
      </div>
    </div>
    <div class="sales-statistics-wrap">
      <div class="sales-title">
        <span>销售统计</span>
      </div>
      <div class="sales-statistics-area">
        <div class="sales-statistics-left">
          <div class="sales-week">
            <div class="sales-left-title">
              <span>本周订单数量</span>
            </div>
            <div class="sales-left-data">
              <span>1000</span>
            </div>
            <div class="sales-left-change">
              <svg-icon iconName="#icon-increase"></svg-icon>
              <span>10%</span>
              <span class="sales-left-change-text">同比上周</span>
            </div>
          </div>
          <div class="sales-month">
            <div class="sales-left-title">
              <span>本月订单数量</span>
            </div>
            <div class="sales-left-data">
              <span>10000</span>
            </div>
            <div class="sales-left-change">
              <svg-icon iconName="#icon-decline"></svg-icon>
              <span>10%</span>
              <span class="sales-left-change-text">同比上月</span>
            </div>
          </div>
        </div>
        <div class="sales-statistics-right"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style lang="less" scoped>
.home-page-wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 30px;
  .order-sales-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .order-today,
    .sales-today,
    .sales-yestarday,
    .sales-week {
      width: 280px;
      height: 120px;
      color: #fff;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0 10px;
      text-align: left;
      font-weight: 600;
    }
    .order-today {
      background-image: linear-gradient(
        to right,
        #3fa6d7,
        #43aad2,
        #4aafcd,
        #4eb4c8
      );
    }
    .sales-today {
      background-image: linear-gradient(
        to right,
        #fa4690,
        #fa538c,
        #fa6487,
        #fd7681
      );
    }
    .sales-yestarday {
      background-image: linear-gradient(
        to right,
        #9b5cc5,
        #aa56cb,
        #b153ce,
        #be4dd3
      );
    }
    .sales-week {
      background-image: linear-gradient(
        to right,
        #f0a136,
        #f0aa36,
        #eeb935,
        #ecc335
      );
    }
  }
  .home-overview-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    .course-overview,
    .user-overview {
      width: 570px;
      height: 200px;
      border: 1px solid #e2e2e2;
    }
    .course-title,
    .user-title {
      width: 100%;
      height: 40px;
      text-align: left;
      font-size: 16px;
      background-color: #e0ebf9;
      display: flex;
      align-items: center;
    }
    .course-data,
    .user-data {
      width: 100%;
      height: calc(100% - 40px);
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 18px;
      color: #995dc4;
      font-weight: 700;
      .data-text {
        color: #000;
      }
    }
  }
  .order-statistics-wrap {
    width: 100%;
    height: 360px;
    border: 1px solid #e2e2e2;
    margin-top: 20px;
    .order-title {
      width: 100%;
      height: 40px;
      background-color: #e0ebf9;
      line-height: 40px;
      text-align: left;
    }
    .order-statistics-area {
      width: 100%;
      height: calc(100% - 40px);
      .order-statistics-left {
        width: 160px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        border-right: 1px solid #e2e2e2;
        .order-left-title {
          color: #a4a4a4;
          font-size: 14px;
        }
        .order-left-data {
          color: #000;
          font-size: 18px;
          font-weight: 600;
        }
        .order-left-change {
          width: 120px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .order-left-change-text {
            color: #d2d2d2;
          }
        }
      }
    }
  }
  .sales-statistics-wrap {
    width: 100%;
    height: 360px;
    border: 1px solid #e2e2e2;
    margin-top: 20px;
    .sales-title {
      width: 100%;
      height: 40px;
      background-color: #e0ebf9;
      line-height: 40px;
      text-align: left;
    }
    .sales-statistics-area {
      width: 100%;
      height: calc(100% - 40px);
      .sales-statistics-left {
        width: 160px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        border-right: 1px solid #e2e2e2;
        .sales-left-title {
          color: #a4a4a4;
          font-size: 14px;
        }
        .sales-left-data {
          color: #000;
          font-size: 18px;
          font-weight: 600;
        }
        .sales-left-change {
          width: 120px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .sales-left-change-text {
            color: #d2d2d2;
          }
        }
      }
    }
  }
}
</style>
