import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { School, Work } from '@mui/icons-material'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2015 - 2018'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<School />}
        >
          <h3 className='vertical-timeline-element-title'>
            Mekdela primary and secondary school, South Wello, Ethiopia
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2018 - 2022'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<School />}
        >
          <h3 className='vertical-timeline-element-title'>
            Debre Berhan University, Debre Berhan, Ethiopia
          </h3>
          <br />

          <h4 className='vertical-timeline-element-subtitle'>
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2022 - present'
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<Work />}
        >
          <h3 className='vertical-timeline-element-title'>
            Front - end Developer - Dan Energy Ethiopia plc
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Addis Ababa, Ethiopia
          </h4>
          <p>Developing the front-end of some projects.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
