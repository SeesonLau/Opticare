import { useCallback } from 'react';
import styles from './ClinicHomePage.module.css';


const ClinicHomePage = () => {
  	
  	const onProfileContainerClick = useCallback(() => {
    		// Add your logical code here
  	}, []);
  	
  	return (
    		<div className={styles.clinicHomePage}>
      			<div className={styles.clinicNavigationBar}>
        				<img className={styles.opticareLogo22} alt="" src="OptiCare LOGO2 2.png" />
        				<img className={styles.vectorIcon} alt="" src="Vector.svg" />
        				<img className={styles.personIcon} alt="" src="person.svg" />
        				<img className={styles.calendarMonthIcon} alt="" src="Calendar month.svg" />
        				<img className={styles.vectorIcon1} alt="" src="Vector.svg" />
        				<img className={styles.personIcon} alt="" src="settings.svg" />
        				<img className={styles.logOutIcon} alt="" src="Log out.svg" />
      			</div>
      			<div className={styles.clinicHomePageChild} />
      			<img className={styles.genericAvatarIcon} alt="" src="Generic avatar.svg" />
      			<div className={styles.welcome}>Welcome!</div>
      			<div className={styles.profile} onClick={onProfileContainerClick}>
        				<div className={styles.profileChild} />
        				<img className={styles.genericAvatarIcon1} alt="" src="Generic avatar.svg" />
        				<div className={styles.user}>User</div>
      			</div>
      			<img className={styles.clinicHomePageItem} alt="" src="Frame 58.svg" />
      			<div className={styles.calendar}>
        				<div className={styles.calendar1}>
          					<div className={styles.calendarChild} />
          					<div className={styles.october2024Parent}>
            						<div className={styles.october2024}>October 2024</div>
            						<div className={styles.iconsParent}>
              							<img className={styles.icons} alt="" src="Icons.svg" />
              							<img className={styles.icons1} alt="" src="Icons.png" />
            						</div>
            						<div className={styles.groupChild} />
            						<div className={styles.weekBase}>
              							<div className={styles.sen}>Sun</div>
            						</div>
            						<div className={styles.weekBase1}>
              							<div className={styles.sen}>Mon</div>
            						</div>
            						<div className={styles.weekBase2}>
              							<div className={styles.sen}>Tue</div>
            						</div>
            						<div className={styles.weekBase3}>
              							<div className={styles.sen}>Wed</div>
            						</div>
            						<div className={styles.weekBase4}>
              							<div className={styles.sen}>Thu</div>
            						</div>
            						<div className={styles.weekBase5}>
              							<div className={styles.sen}>FrI</div>
            						</div>
            						<div className={styles.weekBase6}>
              							<div className={styles.sen}>SAT</div>
            						</div>
            						<div className={styles.days}>
              							<div className={styles.div}>3</div>
            						</div>
            						<div className={styles.days1}>
              							<div className={styles.div}>2</div>
            						</div>
            						<div className={styles.days2}>
              							<div className={styles.div}>1</div>
            						</div>
            						<div className={styles.days3}>
              							<div className={styles.div} />
            						</div>
            						<div className={styles.days4}>
              							<div className={styles.div} />
            						</div>
            						<div className={styles.days5}>
              							<div className={styles.div}>4</div>
            						</div>
            						<div className={styles.days6}>
              							<div className={styles.div}>5</div>
            						</div>
            						<div className={styles.days7}>
              							<div className={styles.div}>6</div>
            						</div>
            						<div className={styles.days8}>
              							<div className={styles.div}>7</div>
            						</div>
            						<div className={styles.days9}>
              							<div className={styles.div}>8</div>
            						</div>
            						<div className={styles.days10}>
              							<div className={styles.div}>9</div>
            						</div>
            						<div className={styles.days11}>
              							<div className={styles.div}>10</div>
            						</div>
            						<div className={styles.days12}>
              							<div className={styles.div}>11</div>
            						</div>
            						<div className={styles.days13}>
              							<div className={styles.div}>12</div>
            						</div>
            						<div className={styles.days14}>
              							<div className={styles.div}>13</div>
            						</div>
            						<div className={styles.days15}>
              							<div className={styles.div}>14</div>
            						</div>
            						<div className={styles.days16}>
              							<div className={styles.div}>15</div>
            						</div>
            						<div className={styles.days17}>
              							<div className={styles.div17}>16</div>
              							<div className={styles.daysChild} />
              							<div className={styles.daysItem} />
            						</div>
            						<div className={styles.days18}>
              							<div className={styles.div}>17</div>
            						</div>
            						<div className={styles.days19}>
              							<div className={styles.div}>18</div>
            						</div>
            						<div className={styles.days20}>
              							<div className={styles.div20}>19</div>
            						</div>
            						<div className={styles.days21}>
              							<div className={styles.div}>20</div>
            						</div>
            						<div className={styles.days22}>
              							<div className={styles.div}>21</div>
            						</div>
            						<div className={styles.days23}>
              							<div className={styles.div}>22</div>
            						</div>
            						<div className={styles.days24}>
              							<div className={styles.div}>23</div>
            						</div>
            						<div className={styles.days25}>
              							<div className={styles.div}>24</div>
            						</div>
            						<div className={styles.days26}>
              							<div className={styles.div}>25</div>
            						</div>
            						<div className={styles.days27}>
              							<div className={styles.div}>26</div>
            						</div>
            						<div className={styles.days28}>
              							<div className={styles.div}>27</div>
            						</div>
            						<div className={styles.days29}>
              							<div className={styles.div}>28</div>
            						</div>
            						<div className={styles.days30}>
              							<div className={styles.div}>29</div>
            						</div>
            						<div className={styles.days31}>
              							<div className={styles.div}>30</div>
            						</div>
            						<div className={styles.days32}>
              							<div className={styles.div}>31</div>
            						</div>
            						<div className={styles.calendarParent}>
              							<div className={styles.calendar2}>Calendar</div>
              							<img className={styles.icons1} alt="" src="Icons.png" />
            						</div>
          					</div>
          					<div className={styles.frameParent}>
            						<div className={styles.upcomingParent}>
              							<b className={styles.upcoming}>Upcoming</b>
              							<div className={styles.viewAll}>View All</div>
            						</div>
            						<div className={styles.groupItem} />
            						<div className={styles.rectangleParent}>
              							<div className={styles.groupInner} />
              							<div className={styles.groupParent}>
                								<div className={styles.headingHeadingLeftParent}>
                  									<div className={styles.headingHeading}>Appointment</div>
                  									<div className={styles.headingHeading1}>October 10, 2024   |   04:00 PM</div>
                								</div>
                								<div className={styles.ellipseDiv} />
                								<b className={styles.m}>M</b>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.visits}>
        				<div className={styles.groupContainer}>
          					<div className={styles.groupContainer}>
            						<div className={styles.visitsForTodayParent}>
              							<div className={styles.visitsForToday}>Visits for Today</div>
              							<div className={styles.div33}>104</div>
            						</div>
            						<div className={styles.oldnewPatients}>
              							<div className={styles.rectangleGroup}>
                								<div className={styles.rectangleDiv} />
                								<div className={styles.newPatients}>New Patients</div>
                								<div className={styles.div34}>40</div>
                								<div className={styles.rectangleContainer}>
                  									<div className={styles.groupChild1} />
                  									<div className={styles.parent}>
                    										<div className={styles.today}>51%</div>
                    										<img className={styles.groupIcon} alt="" src="Group 1000000904.svg" />
                  									</div>
                								</div>
              							</div>
              							<div className={styles.groupDiv}>
                								<div className={styles.groupChild2} />
                								<div className={styles.oldPatients}>Old Patients</div>
                								<div className={styles.div36}>64</div>
                								<div className={styles.rectangleParent1}>
                  									<div className={styles.groupChild3} />
                  									<div className={styles.group}>
                    										<div className={styles.div37}>20%</div>
                    										<img className={styles.groupChild4} alt="" src="Group 1000000904.png" />
                  									</div>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.clinicWidgets}>
        				<div className={styles.clinicWidgetsChild} />
        				<div className={styles.clinicWidgetsItem} />
        				<div className={styles.patientList}>
          					<div className={styles.patientListParent}>
            						<div className={styles.patientList1}>Patient List</div>
            						<div className={styles.todayParent}>
              							<div className={styles.today}>Today</div>
              							<img className={styles.groupChild5} alt="" src="Vector 3.svg" />
            						</div>
          					</div>
          					<div className={styles.groupParent1}>
            						<div className={styles.groupParent2}>
              							<img className={styles.groupWrapper} alt="" src="Group 48095504.svg" />
              							<div className={styles.stacyMitchell}>Stacy Mitchell</div>
              							<div className={styles.weeklyVisit}>Weekly Visit</div>
              							<div className={styles.rectangleParent2}>
                								<div className={styles.groupChild7} />
                								<div className={styles.am}>9 : 15 AM</div>
              							</div>
              							<div className={styles.sm}>SM</div>
            						</div>
            						<div className={styles.groupParent3}>
              							<img className={styles.groupWrapper} alt="" src="Group 48095504.svg" />
              							<div className={styles.stacyMitchell}>Mary Hope</div>
              							<div className={styles.weeklyVisit}>Weekly Visit</div>
              							<div className={styles.rectangleParent2}>
                								<div className={styles.groupChild7} />
                								<div className={styles.am}>10:00 AM</div>
              							</div>
              							<div className={styles.sm}>SM</div>
            						</div>
            						<div className={styles.groupParent4}>
              							<div className={styles.ellipseParent}>
                								<div className={styles.groupChild10} />
                								<div className={styles.groupChild11} />
                								<div className={styles.ad}>AD</div>
              							</div>
              							<div className={styles.stacyMitchell}>Amy Dunham</div>
              							<div className={styles.routineCheckup}>Routine Checkup</div>
              							<div className={styles.rectangleParent4}>
                								<div className={styles.groupChild12} />
                								<div className={styles.am2}>9 : 30 AM</div>
              							</div>
            						</div>
            						<div className={styles.groupParent5}>
              							<div className={styles.ellipseParent}>
                								<div className={styles.groupChild13} />
                								<div className={styles.groupChild14} />
                								<div className={styles.dj}>DJ</div>
              							</div>
              							<div className={styles.stacyMitchell}>Demi Joan</div>
              							<div className={styles.report}>Report</div>
              							<div className={styles.rectangleParent5}>
                								<div className={styles.groupChild15} />
                								<div className={styles.am2}>9 : 50 AM</div>
              							</div>
            						</div>
            						<div className={styles.groupParent6}>
              							<img className={styles.groupWrapper} alt="" src="Group 48095504.svg" />
              							<div className={styles.shawnHarper}>Shawn Harper</div>
              							<div className={styles.weeklyVisit}>Weekly Visit</div>
              							<div className={styles.rectangleParent2}>
                								<div className={styles.groupChild7} />
                								<div className={styles.pm}>1:00 PM</div>
              							</div>
              							<div className={styles.sm}>SM</div>
            						</div>
            						<div className={styles.groupParent7}>
              							<img className={styles.groupWrapper} alt="" src="Group 48095504.svg" />
              							<div className={styles.shawnHarper}>Angel Kim</div>
              							<div className={styles.weeklyVisit}>Weekly Visit</div>
              							<div className={styles.rectangleParent2}>
                								<div className={styles.groupChild7} />
                								<div className={styles.pm1}>3:00 PM</div>
              							</div>
              							<div className={styles.sm}>SM</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.consultation}>
          					<div className={styles.consultation1}>Consultation</div>
          					<div className={styles.rectangleParent8}>
            						<div className={styles.groupChild20} />
            						<div className={styles.vectorParent}>
              							<img className={styles.groupChild21} alt="" src="Vector 4.svg" />
              							<div className={styles.groupParent8}>
                								<div className={styles.groupWrapper}>
                  									<div className={styles.groupWrapper}>
                    										<div className={styles.groupChild13} />
                    										<div className={styles.groupChild14} />
                    										<div className={styles.dw}>DW</div>
                  									</div>
                								</div>
                								<div className={styles.stacyMitchell}>Denzel White</div>
                								<div className={styles.male28}>Male - 28 Years</div>
                								<img className={styles.groupChild24} alt="" src="Group 1000000893.svg" />
              							</div>
              							<div className={styles.groupParent9}>
                								<div className={styles.lastCheckedParent}>
                  									<div className={styles.lastChecked}>Last Checked</div>
                  									<div className={styles.drEverlyOnContainer}>
                    										<span className={styles.drEverlyOnContainer1}>
                      											<span className={styles.drEverly}>Dr Everly</span>
                      											<span className={styles.onJune20}>{` on June 20, 2024 Lens Prescription `}</span>
                    										</span>
                  									</div>
                								</div>
                								<div className={styles.astigmatism115Parent}>
                  									<div className={styles.astigmatism115}>Astigmatism 1.15</div>
                  									<div className={styles.observation}>Observation</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.rectangleParent9}>
            						<div className={styles.groupChild20} />
            						<div className={styles.vectorParent}>
              							<img className={styles.groupChild21} alt="" src="Vector 4.svg" />
              							<div className={styles.groupParent8}>
                								<div className={styles.groupWrapper}>
                  									<div className={styles.groupWrapper}>
                    										<div className={styles.groupChild13} />
                    										<div className={styles.groupChild14} />
                    										<div className={styles.dw}>DW</div>
                  									</div>
                								</div>
                								<div className={styles.stacyMitchell}>Carlos Paul</div>
                								<div className={styles.male28}>Male - 22 Years</div>
                								<img className={styles.groupChild24} alt="" src="Group 1000000893.svg" />
              							</div>
              							<div className={styles.groupParent9}>
                								<div className={styles.lastCheckedParent}>
                  									<div className={styles.lastChecked}>Last Checked</div>
                  									<div className={styles.drEverlyOnContainer}>
                    										<span className={styles.drEverlyOnContainer1}>
                      											<span className={styles.drEverly}>Dr Everly</span>
                      											<span className={styles.onJune20}>{` on July 25, 2024 Lens Prescription `}</span>
                    										</span>
                  									</div>
                								</div>
                								<div className={styles.astigmatism115Parent}>
                  									<div className={styles.astigmatism115}>Astigmatism 1.40</div>
                  									<div className={styles.observation}>Observation</div>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.drName}>Dr. Name</div>
      			<div className={styles.optometrist}>Optometrist</div>
    		</div>);
};

export default ClinicHomePage;
