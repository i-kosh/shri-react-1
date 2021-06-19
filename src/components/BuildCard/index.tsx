import { FC } from 'react'
import { ReactComponent as SuccessSvg } from '../../assets/success.svg'
import { ReactComponent as FailSvg } from '../../assets/fail.svg'
import { ReactComponent as WaitSvg } from '../../assets/wait.svg'
import { ReactComponent as UserSvg } from '../../assets/user.svg'
import { ReactComponent as CommitSvg } from '../../assets/commit.svg'
import { ReactComponent as CalendarSvg } from '../../assets/calendar.svg'
import { ReactComponent as TimeSvg } from '../../assets/time.svg'
import classnames from 'classnames'
import './style.scss'

export interface BuildCardProps {
  status: 'success' | 'wait' | 'fail'
  number: string
  msg: string
  mainBranch: string
  commitHash: string
  author: string
  startDate: string
  duration: number | string
  selectable?: boolean
  className?: string
  oneline?: boolean
}

export const BuildCard: FC<BuildCardProps> = (props) => {
  const {
    className,
    author,
    commitHash,
    duration,
    mainBranch,
    msg,
    number,
    status,
    startDate,
    selectable,
    oneline,
  } = props

  const rootClassnames =
    classnames({
      'build-card': true,
      'build-card--success': status === 'success',
      'build-card--fail': status === 'fail',
      'build-card--wait': status === 'wait',
      'build-card--selectable': selectable,
      'build-card--oneline': oneline,
    }) + ` ${className || ''}`

  const shortHash = commitHash.slice(0, 6)
  const date = new Date(startDate)
  const getStartDateString = () => {
    const monthsRU = [
      'янв',
      'фев',
      'мар',
      'апр',
      'май',
      'июн',
      'июл',
      'авг',
      'сен',
      'окт',
      'ноя',
      'дек',
    ]

    return `${date.getDate()} ${
      monthsRU[date.getMonth()]
    }, ${date.getHours()}:${date.getMinutes()}`
  }
  const getDurationString = () => {
    const durationMinutes = parseInt(`${duration}`) / 1000 / 60

    const hours = Math.floor(durationMinutes / 60)
    const minutes = Math.floor(durationMinutes % 60)

    return `${hours} ч ${minutes} мин`
  }

  const statusIcon =
    status === 'success' ? (
      <SuccessSvg />
    ) : status === 'fail' ? (
      <FailSvg />
    ) : (
      <WaitSvg />
    )

  return (
    <div className={rootClassnames}>
      <div>
        <div className="build-card__status-message">
          <p className="build-card__status">
            <span className="build-card__status-icon">{statusIcon}</span>
            <span className="build-card__number">#{number}</span>
          </p>

          <div className="build-card__message">{msg}</div>
        </div>

        <div className="build-card__commit">
          <p className="build-card__branch">
            <span className="build-card__icon">
              <CommitSvg />
            </span>
            <span>{mainBranch}</span>
            <span className="build-card__branch-hash">{shortHash}</span>
          </p>
          <p className="build-card__author">
            <span className="build-card__icon">
              <UserSvg />
            </span>
            <span>{author}</span>
          </p>
        </div>
      </div>

      <div className="build-card__timing">
        <p className="build-card__startdate">
          <span className="build-card__icon">
            <CalendarSvg />
          </span>
          <span>{getStartDateString()}</span>
        </p>
        <p className="build-card__duration">
          <span className="build-card__icon">
            <TimeSvg />
          </span>
          <span>{getDurationString()}</span>
        </p>
      </div>
    </div>
  )
}
