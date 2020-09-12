import { h, ref, defineComponent } from 'vue';
import './circle.scss';
const Circle = defineComponent({
	name: 'wrCircle',
	props: {
		//当前值
		value: {
			type: Number,
			default: 0,
		},
		//最终值
		target: {
			type: Number,
			default: 100,
		},
		//进度条形状 circle圆形 bar条形
		type: {
			type: String,
			default: 'circle',
		},

		//圆形进度大小
		size: {
			type: [String, Number],
			default: 100,
		},
		//进度条颜色
		color: {
			type: String,
			default: '#1989fa',
		},
		//圆形进度轨道颜色
		trackColor: {
			type: String,
			default: '#ffffff',
		},
		//圆形进度条宽度
		strokeWidth: {
			type: [String, Number],
			default: 5,
		},
		//保留几位小数
		decimalPlace: {
			type: Number,
			default: 2,
		},
	},
	setup(props, context) {
		//svg圆形进度
		const getStrokeDasharray = () => {
			let percent = Math.PI * props.value * 0.9;
			let end = Math.PI * props.size * 0.9;
			if (percent >= end) {
				context.emit('input', props.target);
				return end + 'px ' + end + 'px';
			} else if (percent <= 0) {
				context.emit('input', 0);
				return 0 + 'px ' + end + 'px';
			} else {
				return percent + 'px ' + end + 'px';
			}
		};

		//获取进度值
		const getDecimal = () => {
			let dat = Math.round((props.value / props.target) * 100);
			if (dat <= 100) {
				return dat;
			} else {
				return 100;
			}
		};

		// 圆形进度容器内联样式
		const circleContainerStyle = {
			width: props.size + 'px',
			height: props.size + 'px',
		};

		const wrProgressBar = ref(null);
		const circleStyle = {
			transform: ' matrix(0, -1, 1, 0, 0, ' + props.size + ')',
			transition: 'stroke-dasharray .4s ease-in',
		};

		return () => (
			<div class="wr-progress" ref={wrProgressBar}>
				<div class="wr-progress-circle" style={circleContainerStyle}>
					<svg>
						<circle
							cx={props.size / 2}
							cy={props.size / 2}
							r={(props.size / 2) * 0.9}
							stroke-width={props.strokeWidth}
							stroke={props.trackColor}
							fill="none"
						></circle>
						<circle
							cx={props.size / 2}
							cy={props.size / 2}
							r={(props.size / 2) * 0.9}
							stroke-width={props.strokeWidth}
							stroke={props.color}
							fill="none"
							stroke-dasharray={getStrokeDasharray()}
							style={circleStyle}
						></circle>
					</svg>
					<div class="wr-progress-circle_text">
                        {context.slots.default?context.slots.default():getDecimal() + '%'}
					</div>
				</div>
			</div>
		);
	},
});

export default Circle;
