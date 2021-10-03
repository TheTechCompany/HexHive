import { getGraphDriver, getGraphSession } from '@hexhive/data-core'
import { Session, Driver } from 'neo4j-driver'

export const driver : Driver = getGraphDriver()

export const session : Session = getGraphSession(driver)