import React, { useEffect, useState } from "react"
import {
    mapDispatchToProps,
    mapStateToProps,
} from "../../redux/mapToProps/userMapToProps"
import { useSelector, connect } from "react-redux"

const LightAnimation = () => {
    const { stateLight1, stateLight2 } = useSelector(
        (state) => state.user.dates
    )

    const [lightState, setLightState] = useState({})

    const [intervalActive, setIntervalActive] = useState({})

    useEffect(() => {
        setLightState({
            stateLight1,
            stateLight2,
        })
        setIntervalActive({
            stateLight1,
            stateLight2,
        })
    }, [stateLight1, stateLight2])

    useEffect(() => {
        const timer = setTimeout(() => {
            setLightState({
                stateLight2: intervalActive.stateLight2
                    ? !lightState.stateLight2
                    : stateLight1,
                stateLight1: intervalActive.stateLight1
                    ? !lightState.stateLight1
                    : stateLight2,
            })
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [lightState])

    return (
        <svg viewBox="73.139 92.916 593.903 493.591">
            <g>
                <g>
                    <g>
                        <g>
                            <g>
                                <g>
                                    <defs>
                                        <polyline
                                            id="SVGID_1_"
                                            points="73.139,457.111 145.591,457.111 145.591,546.188 73.139,546.188 							"
                                        />
                                    </defs>
                                    <clipPath id="SVGID_2_">
                                        <use
                                            href="#SVGID_1_"
                                            overflow="visible"
                                        />
                                    </clipPath>
                                </g>
                            </g>
                            <g>
                                <g id="Capa_2_40_">
                                    <g id="Capa_1-2_40_">
                                        <path
                                            fill="#F3C31E"
                                            d="M623.675,546.438H116.507c-23.951,0-43.367-19.417-43.367-43.368v-16.293l0,0h593.903l0,0v16.293
								C667.042,527.021,647.626,546.438,623.675,546.438z"
                                        />
                                        <path
                                            fill="#F3C31E"
                                            d="M286.574,546.438h167.673l0,0v32.693c0,4.211-3.412,7.625-7.623,7.625H294.198
								c-4.211,0-7.624-3.414-7.624-7.625l0,0V546.438L286.574,546.438z"
                                        />
                                        <rect
                                            x="73.139"
                                            y="457.361"
                                            fill="#F3C31E"
                                            width="215.514"
                                            height="16.229"
                                        />
                                        <rect
                                            x="452.007"
                                            y="457.116"
                                            fill="#F3C31E"
                                            width="215.035"
                                            height="16.399"
                                        />
                                    </g>
                                </g>
                                <g>
                                    <defs>
                                        <polyline
                                            id="SVGID_3_"
                                            points="73.139,457.111 145.591,457.111 145.591,546.188 73.139,546.188 							"
                                        />
                                    </defs>
                                    <clipPath id="SVGID_4_">
                                        <use
                                            href="#SVGID_3_"
                                            overflow="visible"
                                        />
                                    </clipPath>
                                    <g
                                        id="Capa_2_39_"
                                        clipPath="url(#SVGID_4_)"
                                    >
                                        <g>
                                            <g id="Capa_1-2_39_">
                                                <path
                                                    fill="#C69711"
                                                    d="M623.675,546.434H116.507c-23.951,0-43.367-19.417-43.367-43.368v-16.293l0,0h593.903l0,0v16.293
										C667.042,527.017,647.626,546.434,623.675,546.434z"
                                                />
                                                <path
                                                    fill="#C69711"
                                                    d="M286.574,546.434h167.673l0,0v32.693c0,4.211-3.412,7.625-7.623,7.625H294.198
										c-4.211,0-7.624-3.414-7.624-7.625l0,0V546.434L286.574,546.434z"
                                                />
                                                <rect
                                                    x="73.139"
                                                    y="457.356"
                                                    fill="#C69711"
                                                    width="215.514"
                                                    height="16.229"
                                                />
                                                <rect
                                                    x="452.007"
                                                    y="457.111"
                                                    fill="#C69711"
                                                    width="215.035"
                                                    height="16.399"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <defs>
                                        <polyline
                                            id="SVGID_5_"
                                            points="73.139,457.111 145.591,457.111 145.591,546.188 73.139,546.188 							"
                                        />
                                    </defs>
                                    <clipPath id="SVGID_6_">
                                        <use
                                            href="#SVGID_5_"
                                            overflow="visible"
                                        />
                                    </clipPath>
                                </g>
                            </g>
                        </g>
                        <g>
                            <defs>
                                <polyline
                                    id="SVGID_7_"
                                    points="667.042,457.121 600.591,457.116 600.591,546.443 667.042,546.443 					"
                                />
                            </defs>
                            <clipPath id="SVGID_8_">
                                <use href="#SVGID_7_" overflow="visible" />
                            </clipPath>
                            <g clipPath="url(#SVGID_8_)">
                                <g id="Capa_2_6_">
                                    <g>
                                        <g id="Capa_1-2_24_">
                                            <path
                                                fill="#F4CC5C"
                                                d="M623.675,546.438H116.507c-23.951,0-43.367-19.417-43.367-43.368v-16.293l0,0h593.903l0,0v16.293
									C667.042,527.021,647.626,546.438,623.675,546.438z"
                                            />
                                            <path
                                                fill="#F4CC5C"
                                                d="M286.574,546.438h167.673l0,0v32.693c0,4.211-3.412,7.625-7.623,7.625H294.198
									c-4.211,0-7.624-3.414-7.624-7.625l0,0V546.438L286.574,546.438z"
                                            />
                                            <rect
                                                x="73.139"
                                                y="457.361"
                                                fill="#F4CC5C"
                                                width="215.514"
                                                height="16.229"
                                            />
                                            <rect
                                                x="452.007"
                                                y="457.116"
                                                fill="#F4CC5C"
                                                width="215.035"
                                                height="16.399"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <polygon
                            fill="#C69711"
                            points="286.574,560.445 286.574,546.188 454.247,546.188 			"
                        />
                        <polyline
                            fill="#C69711"
                            points="167.258,457.361 178.591,457.361 178.591,473.59 167.258,473.59 			"
                        />
                        <rect
                            x="167.258"
                            y="486.777"
                            fill="#C69711"
                            width="11.333"
                            height="59.661"
                        />
                    </g>
                    <g id="Capa_2_2_">
                        <g>
                            <g id="Capa_1-2_15_">
                                <rect
                                    x="73.139"
                                    y="431.068"
                                    fill={
                                        lightState.stateLight1
                                            ? "#FF2023"
                                            : "#650C0D"
                                    }
                                    width="215.514"
                                    height="14.11"
                                />
                                <path
                                    fill={
                                        lightState.stateLight1
                                            ? "#FF2023"
                                            : "#650C0D"
                                    }
                                    d="M180.904,165.77c-0.74,0-1.476,0.01-2.208,0.025V98.344c0-2.999-2.431-5.428-5.429-5.428
						c-0.002,0-0.009,0-0.009,0c-2.997,0-5.426,2.429-5.426,5.427v68.209C114.481,173,73.139,218.433,73.139,273.523v148.805
						h215.514V273.523C288.653,214.01,240.408,165.77,180.904,165.77z"
                                />
                            </g>
                        </g>
                    </g>
                    <g id="Capa_2_24_">
                        <g>
                            <g id="Capa_1-2_28_">
                                <rect
                                    x="451.458"
                                    y="431.067"
                                    fill={
                                        lightState.stateLight2
                                            ? "#FF2023"
                                            : "#650C0D"
                                    }
                                    width="215.514"
                                    height="14.111"
                                />
                                <path
                                    fill={
                                        lightState.stateLight2
                                            ? "#FF2023"
                                            : "#650C0D"
                                    }
                                    d="M451.458,273.523v148.805h215.514V273.523c0-55.09-41.341-100.522-94.691-106.971V98.343
						c0-2.998-2.43-5.427-5.427-5.427c0,0-0.007,0-0.009,0c-2.998,0-5.43,2.429-5.43,5.428v67.451
						c-0.731-0.015-1.467-0.025-2.207-0.025C499.704,165.77,451.458,214.01,451.458,273.523z"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
            <g id="verde">
                <g id="Capa_2_22_">
                    <g>
                        <g id="Capa_1-2_31_">
                            <path
                                fill={
                                    lightState.stateLight2
                                        ? "#FF2023"
                                        : "#650C0D"
                                }
                                d="M453.505,274.03v146.415h211.3V274.03c0-54.205-40.533-98.909-92.84-105.254l-10.653-0.744
					c-0.717-0.015-1.438-0.024-2.163-0.024C500.808,168.008,453.505,215.473,453.505,274.03z"
                            />
                        </g>
                    </g>
                </g>
                <g id="Capa_2_20_">
                    <g>
                        <g id="Capa_1-2_30_">
                            <rect
                                x="453.222"
                                y="432.63"
                                fill={
                                    lightState.stateLight2
                                        ? "#FF2023"
                                        : "#650C0D"
                                }
                                width="211.875"
                                height="10.984"
                            />
                        </g>
                    </g>
                </g>
                <g>
                    <g id="Capa_2_18_">
                        <g>
                            <g id="Capa_1-2_29_">
                                <path
                                    fill={
                                        lightState.stateLight2
                                            ? "#FF2023"
                                            : "#650C0D"
                                    }
                                    d="M570.555,133.752V97.938c0-1.574-1.565-2.849-3.497-2.849c0,0-0.004,0-0.006,0
						c-1.933,0-3.498,1.275-3.498,2.85v35.416C563.288,133.35,572.666,133.959,570.555,133.752z"
                                />
                            </g>
                        </g>
                    </g>
                    <g id="Capa_2_16_">
                        <g>
                            <g id="Capa_1-2_27_">
                                <path
                                    fill={
                                        lightState.stateLight2
                                            ? "#FF2023"
                                            : "#650C0D"
                                    }
                                    d="M570.555,169.127v-35.814c0-1.574-1.565-2.849-3.497-2.849c0,0-0.004,0-0.006,0
						c-1.933,0-3.498,1.275-3.498,2.85v35.416C563.288,168.725,572.666,169.334,570.555,169.127z"
                                />
                            </g>
                        </g>
                    </g>
                </g>
                <circle fill="#FFFFFF" cx="499.473" cy="229.779" r="9" />
            </g>
            <g id="rojo">
                <g id="Capa_2_8_">
                    <g>
                        <g id="Capa_1-2_22_">
                            <path
                                fill={
                                    lightState.stateLight1
                                        ? "#FF2023"
                                        : "#650C0D"
                                }
                                d="M180.963,168.008c-0.726,0-1.447,0.01-2.164,0.024l-10.653,0.744
					c-52.307,6.345-92.839,51.049-92.839,105.254v146.415h211.299V274.03C286.606,215.473,239.303,168.008,180.963,168.008z"
                            />
                        </g>
                    </g>
                </g>
                <g id="Capa_2_11_">
                    <g>
                        <g id="Capa_1-2_20_">
                            <rect
                                x="75.015"
                                y="432.631"
                                fill={
                                    lightState.stateLight1
                                        ? "#FF2023"
                                        : "#650C0D"
                                }
                                width="211.875"
                                height="10.984"
                            />
                        </g>
                    </g>
                </g>
                <g>
                    <g id="Capa_2_7_">
                        <g>
                            <g id="Capa_1-2_19_">
                                <path
                                    fill={
                                        lightState.stateLight1
                                            ? "#FF2023"
                                            : "#650C0D"
                                    }
                                    d="M176.808,133.252V97.836c0-1.574-1.565-2.85-3.499-2.85c-0.002,0-0.005,0-0.005,0
						c-1.932,0-3.498,1.275-3.498,2.849v35.814C167.696,133.857,177.073,133.248,176.808,133.252z"
                                />
                            </g>
                        </g>
                    </g>
                    <g id="Capa_2_13_">
                        <g>
                            <g id="Capa_1-2_18_">
                                <path
                                    fill={
                                        lightState.stateLight1
                                            ? "#FF2023"
                                            : "#650C0D"
                                    }
                                    d="M176.808,168.627v-35.416c0-1.574-1.565-2.85-3.499-2.85c-0.002,0-0.005,0-0.005,0
						c-1.932,0-3.498,1.275-3.498,2.849v35.814C167.696,169.232,177.073,168.623,176.808,168.627z"
                                />
                            </g>
                        </g>
                    </g>
                </g>
                <circle fill="#FFFFFF" cx="118.365" cy="229.779" r="9" />
            </g>

            <style jsx>{`
                svg {
                    width: 100%;
                }
            `}</style>
        </svg>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LightAnimation)
