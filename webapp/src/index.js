import React from 'react'
import ReactDOM from 'react-dom'

import PageTitle from './components/PageTitle'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

ReactDOM.render(<Home />, document.getElementById('app'))

function Home() {
  return (
    <>
      <PageTitle />
      <Navbar category="首页" />
      
      <div className="clearfix mt-3"></div>

      <div className="container">
        <h3>
          <span className="badge badge-info">
            开源项目
          </span>
          &nbsp;
          个人档案数字化及管理系统
        </h3>

        <p className="lead">
          <ul className="list-inline">
            链接：
            <li className="list-inline-item">
              <a href="https://github.com/ovaphlow/himawari-webapp" target="_blank">
                前端代码库地址
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/ovaphlow/himawari-dispatcher" target="_black">
                路由端代码库地址
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/ovaphlow/himawari-service" target="_blank">
                后端代码库地址
              </a>
            </li>
          </ul>
        </p>
      </div>

      <Footer />
    </>
  )
}