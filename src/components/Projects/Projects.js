import { Row, Col, Card } from 'antd'
export const Projects = () => {
  const handleHover = (e) => {
    e.target.style.cursor = 'none'
    e.target.style.color = 'rgba(255, 255, 255, 0.85)'
    e.target.style['border-bottom'] = 'none'
  }
  return (
    <div id="projects">
      <Row style={{ marginTop: '37vh' }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={6}
          xl={6}
          lg={18}
          xs={20}
          md={18}
          sm={18}
          style={{ textAlign: 'left' }}
        >
          <h1
            className="projects-heading"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            style={{
              borderBottom: '2px solid rgb(168, 164, 164)',
              margin: '5%',
            }}
          >
            <b>Projects</b>
          </h1>
        </Col>
      </Row>
      <Row style={{ marginTop: '13px' }}>
        <Col xxl={3} xl={3} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
          <Card
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="remote-code-card"
            style={{ margin: '3%', height: '95%' }}
            bodyStyle={{ backgroundColor: '#141414' }}
            bordered={false}
            hoverable={true}
            title="dd"
            extra={
              <a
                onMouseOver={handleHover}
                style={{ color: 'white' }}
                href="https://github.com/rajatmaheshwari2512/remote-code-exec/"
                target="_blank"
                rel="noreferrer"
              >
                dd
              </a>
            }
          >
            <p
              className="rce-description"
              style={{
                textAlign: 'left',
                color: 'rgb(168, 164, 164)',
                backgroundColor: '#141414',
              }}
            >
              dd
            </p>
            <p
              className="rce-description"
              style={{
                textAlign: 'left',
                color: 'rgb(168, 164, 164)',
                backgroundColor: '#141414',
              }}
            >
              dd
            </p>
            <p
              className="rce-description"
              style={{
                textAlign: 'left',
                color: 'rgb(168, 164, 164)',
                backgroundColor: '#141414',
                marginTop: '27px',
              }}
            >
              ReactJS NodeJS ExpressJS Docker
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
