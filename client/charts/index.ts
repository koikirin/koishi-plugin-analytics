import { Context } from '@koishijs/client'
import CommandChart from './command'
import GuildChart from './guild'
import HistoryChart from './history'
import HourChart from './hour'

export default (ctx: Context) => {
  ctx.plugin(HistoryChart)
  ctx.plugin(HourChart)
  ctx.plugin(GuildChart)
  ctx.plugin(CommandChart)
}
