import { FunctionComponent, FormEventHandler } from 'react'
import { DefaultLayout } from '../../layouts/Default'
import { InputWithLabel } from '../../components/InputWithLabel'
import { InputShort } from '../../components/InputShort'
import { Button } from '../../components/Button'
import { ButtonRouter } from '../../components/ButtonRouter'
import './style.scss'

export const SettingsPage: FunctionComponent = (props) => {
  const onFormSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault()
    console.log(evt)
  }

  return (
    <DefaultLayout>
      <div className="settings">
        <h2 className="settings__header">Settings</h2>
        <p className="settings__subtitle">
          Configure repository connection and synchronization settings.
        </p>

        <form onSubmit={onFormSubmit} className="settings__form">
          <div className="settings__input">
            <InputWithLabel
              labelProps={{
                text: 'GitHub repository',
                requiredMark: true,
              }}
              inputProps={{
                clearable: true,
                nativeAttrs: {
                  placeholder: 'user-name/repo-name',
                  name: 'repo',
                },
              }}
            />
          </div>

          <div className="settings__input">
            <InputWithLabel
              labelProps={{
                text: 'Build command',
                requiredMark: true,
              }}
              inputProps={{
                clearable: true,
                nativeAttrs: {
                  placeholder: 'npm ci && npm run build',
                  name: 'command',
                },
              }}
            />
          </div>

          <div className="settings__input">
            <InputWithLabel
              labelProps={{
                text: 'Main branch',
              }}
              inputProps={{
                clearable: true,
                nativeAttrs: {
                  placeholder: 'master',
                  name: 'branch',
                },
              }}
            />
          </div>

          <div className="settings__input">
            <InputShort
              labelProps={{ text: 'Synchronize every', onLeft: true }}
              inputProps={{
                hideNumberArrows: true,
                nativeAttrs: { type: 'number', name: 'period' },
              }}
              valName="minutes"
            ></InputShort>
          </div>

          <Button
            btnStyle="accent"
            className="settings__save"
            nativeAttrs={{
              type: 'submit',
            }}
          >
            Save
          </Button>

          <ButtonRouter
            path="/"
            buttonProps={{
              className: 'settings__cancel',
            }}
          >
            Cancel
          </ButtonRouter>
        </form>
      </div>
    </DefaultLayout>
  )
}
